--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.19
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: doc; Type: TABLE; Schema: public; Owner: bars
--

CREATE TABLE public.doc (
    id integer NOT NULL,
    name character(50),
    memo text,
    date date DEFAULT now() NOT NULL,
    userid integer NOT NULL
);


ALTER TABLE public.doc OWNER TO bars;

--
-- Name: users; Type: TABLE; Schema: public; Owner: bars
--

CREATE TABLE public.users (
    password character varying(50) NOT NULL,
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.users OWNER TO bars;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: bars
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO bars;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bars
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: bars
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: doc; Type: TABLE DATA; Schema: public; Owner: bars
--

COPY public.doc (id, name, memo, date, userid) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: bars
--

COPY public.users (password, id, name) FROM stdin;
	0	guest
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bars
--

SELECT pg_catalog.setval('public.users_id_seq', 15, true);


--
-- Name: doc doc_pkey; Type: CONSTRAINT; Schema: public; Owner: bars
--

ALTER TABLE ONLY public.doc
    ADD CONSTRAINT doc_pkey PRIMARY KEY (id, userid);


--
-- Name: users users_name_key; Type: CONSTRAINT; Schema: public; Owner: bars
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_name_key UNIQUE (name);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: bars
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: doc fk_doc_users; Type: FK CONSTRAINT; Schema: public; Owner: bars
--

ALTER TABLE ONLY public.doc
    ADD CONSTRAINT fk_doc_users FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

