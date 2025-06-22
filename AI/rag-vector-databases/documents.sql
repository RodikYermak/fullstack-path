-- Create a table to store your documents
-- create table documents (
--   id bigserial primary key,
--   content text, -- corresponds to the "text chunk"
--   embedding vector(1536) -- 1536 works for OpenAI embeddings
-- );

-- Create a function to search for documents
-- create or replace function match_documents (
--   query_embedding vector(1536),
--   match_threshold float,
--   match_count int
-- )
-- returns table (
--   id bigint,
--   content text,
--   similarity float
-- )
-- language sql stable
-- as $$
--   select
--     documents.id,
--     documents.content,
--     1 - (documents.embedding <=> query_embedding) as similarity
--   from documents
--   where 1 - (documents.embedding <=> query_embedding) > match_threshold
--   order by similarity desc
--   limit match_count;
-- $$;

-- Create a function to search for documents
create or replace function match_movies (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  similarity float
)
language sql stable
as $$
  select
    movies.id,
    movies.content,
    1 - (movies.embedding <=> query_embedding) as similarity
  from movies
  where 1 - (movies.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;