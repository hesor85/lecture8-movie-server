-- Table: public.movies

-- DROP TABLE IF EXISTS public.movies;

CREATE TABLE IF NOT EXISTS public.movies
(
    id bigint NOT NULL DEFAULT nextval('movies_id_seq'::regclass),
    title text COLLATE pg_catalog."default",
    year text COLLATE pg_catalog."default",
    CONSTRAINT movies_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.movies
    OWNER to postgres;