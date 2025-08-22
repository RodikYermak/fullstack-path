import Confetti from 'react-confetti';
import type {JSX} from 'react';
/*
CHALLENGE: Explictly type the ConfettiContainer component's return value
*/
type ConfettiContainerProps = {
    isGameWon: boolean;
};

export default function ConfettiContainer({
    isGameWon,
}: ConfettiContainerProps): JSX.Element | null {
    if (!isGameWon) {
        return null;
    } else {
        return <Confetti recycle={false} numberOfPieces={1000} />;
    }
}
