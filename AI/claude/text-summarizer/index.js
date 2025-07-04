import Anthropic from '@anthropic-ai/sdk';

const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

const anthropic = new Anthropic({
    apiKey: ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
});
// Constants
const feedbackDisplayTime = 3000;

// Element Selectors
const textInputArea = document.getElementById('text-input-area');
const summaryLengthContainer = document.getElementById('summary-length-container');
const summaryLengthInput = document.getElementById('summary-length-input');
const summaryLengthText = document.getElementById('summary-length-text');
const summarizeButton = document.getElementById('summarize-button');
const summaryContent = document.getElementById('summary-content');
const summaryOutputArea = document.getElementById('summary-output-area');
const copyButton = document.getElementById('copy-button');
const clearButton = document.getElementById('clear-button');
const loadingSection = document.getElementById('loading-section');
const errorSection = document.getElementById('error-section');
const errorMessage = document.getElementById('error-message');
const dismissErrorButton = document.getElementById('dismiss-error-button');

// Button Event Listeners
summarizeButton.addEventListener('click', summarize);
copyButton.addEventListener('click', copy);
clearButton.addEventListener('click', clear);
dismissErrorButton.addEventListener('click', dismissError);

// Other Event Listeners
document.addEventListener('DOMContentLoaded', focusOnTextInputArea);
textInputArea.addEventListener('input', scrollTextAreaToTopAndEnableControls);
summaryLengthInput.addEventListener('input', updateSummaryLengthText);

// Button Event Handlers
async function summarize() {
    startLoading();
    const text = textInputArea.value;
    const length = summaryLengthInput.value;

    try {
        const response = await anthropic.messages.create({
            model: 'claude-3-5-sonnet-20240620',
            max_tokens: 300,
            system: 'You are a text summarizer. When asked to summarize a text, send back the summary of it. Please only send back the summary without prefixing it with things like "Summary" or telling where the text is from. Also give me the summary as if the original author wrote it and without using a third person voice.',
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: `Summarize this text. Limit the length to ${length} words: ${text}`,
                        },
                    ],
                },
            ],
        });
        endLoading();
        summaryOutputArea.value = response.content[0].text;

        enableSummaryOutputArea();
        enableCopyButton();
        focusOnCopyButton();
    } catch (e) {
        handleError(e);
    }
}

async function copy() {
    try {
        await navigator.clipboard.writeText(summaryOutputArea.value);
        showCopyFeedback('😄 Copied', 'success');
    } catch (err) {
        showCopyFeedback('😔 Failed', 'failure');
    }
}

function clear() {
    clearTextInputArea();
    clearSummaryOutputArea();
    enableTextInputArea();
    focusOnTextInputArea();
    disableAllControls();
}

function dismissError() {
    hideErrorSection();
    displaySummaryContent();
    clear();
}

// Other Event Handlers
function focusOnTextInputArea() {
    textInputArea.focus();
}

function scrollTextAreaToTopAndEnableControls() {
    scrollTextAreaToTop();
    enableControls();
}

function updateSummaryLengthText() {
    summaryLengthText.textContent = `Summary Length: ${summaryLengthInput.value} Words`;
}

// Helper Functions
function scrollTextAreaToTop() {
    setTimeout(() => {
        textInputArea.scrollTop = 0;
    }, 0);
}

function enableControls() {
    if (textInputArea.value.trim() !== '') {
        enableSummaryLengthContainer();
        enableSummaryLengthInput();
        enableSummarizeButton();
        enableClearButton();
    } else {
        disableAllControls();
    }
}

function disableAllControls() {
    disableSummaryLengthContainer();
    disableSummaryLengthInput();
    disableSummarizeButton();
    disableSummaryOutputArea();
    disbaleClearButton();
    disableCopyButton();
}

function startLoading() {
    hideSummaryContent();
    displayLoadingSection();
}

function endLoading() {
    hideLoadingSection();
    displaySummaryContent();
}

function handleError(error) {
    endLoading();
    disableTextInputArea();
    disableAllControls();
    hideSummaryContent();
    setErrorMessageText(`There was an error processing the text: ${error.message}`);
    displayErrorSection();
}

function showCopyFeedback(message, status) {
    const feedbackClass = status === 'success' ? 'copied' : 'failed';
    addClassToCopyButton(feedbackClass);
    setCopyButtonText(message);
    setTimeout(() => {
        removeClassFromCopyButton(feedbackClass);
        setCopyButtonText('Copy');
    }, feedbackDisplayTime);
}

function focusOnCopyButton() {
    copyButton.focus();
}

function displaySummaryContent() {
    summaryContent.style.display = 'flex';
}

function displayLoadingSection() {
    loadingSection.style.display = 'flex';
}

function displayErrorSection() {
    errorSection.style.display = 'flex';
}

function hideLoadingSection() {
    loadingSection.style.display = 'none';
}

function hideErrorSection() {
    errorSection.style.display = 'none';
}

function hideSummaryContent() {
    summaryContent.style.display = 'none';
}

function enableTextInputArea() {
    textInputArea.disabled = false;
}

function enableSummaryLengthContainer() {
    summaryLengthContainer.classList.remove('disabled');
}

function enableClearButton() {
    clearButton.disabled = false;
}

function enableSummarizeButton() {
    summarizeButton.disabled = false;
}

function enableSummaryLengthInput() {
    summaryLengthInput.disabled = false;
}

function enableCopyButton() {
    copyButton.disabled = false;
}

function enableSummaryOutputArea() {
    summaryOutputArea.disabled = false;
}

function disableCopyButton() {
    copyButton.disabled = true;
}

function disbaleClearButton() {
    clearButton.disabled = true;
}

function disableSummaryOutputArea() {
    summaryOutputArea.disabled = true;
}

function disableSummarizeButton() {
    summarizeButton.disabled = true;
}

function disableSummaryLengthInput() {
    summaryLengthInput.disabled = true;
}

function disableSummaryLengthContainer() {
    summaryLengthContainer.classList.add('disabled');
}

function disableTextInputArea() {
    textInputArea.disabled = true;
}

function setErrorMessageText(text) {
    errorMessage.textContent = text;
}

function setCopyButtonText(text) {
    copyButton.textContent = text;
}

function clearTextInputArea() {
    textInputArea.value = '';
}

function clearSummaryOutputArea() {
    summaryOutputArea.value = '';
}

function removeClassFromCopyButton(className) {
    copyButton.classList.remove(className);
}

function addClassToCopyButton(className) {
    copyButton.classList.add(className);
}
