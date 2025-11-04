--
-- PostgreSQL database dump
--

-- Dumped from database version 17rc1
-- Dumped by pg_dump version 17rc1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: BestCircuits; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BestCircuits" (
    "idBestCircuit" bigint NOT NULL,
    name character(50) NOT NULL,
    photo character(50) NOT NULL,
    "bestLap" character(15) NOT NULL,
    "bestLapSpeed" character(10) NOT NULL,
    "timeInPitstops" character(15) NOT NULL,
    "Pitstops" smallint NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "PilotIdPilot" bigint
);


ALTER TABLE public."BestCircuits" OWNER TO postgres;

--
-- Name: BestCircuits_idBestCircuit_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."BestCircuits_idBestCircuit_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."BestCircuits_idBestCircuit_seq" OWNER TO postgres;

--
-- Name: BestCircuits_idBestCircuit_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."BestCircuits_idBestCircuit_seq" OWNED BY public."BestCircuits"."idBestCircuit";


--
-- Name: Groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Groups" (
    "idGroup" bigint NOT NULL,
    "groupName" character(255),
    desciption text,
    "imageGroup" character varying(255),
    hidendisc text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Groups" OWNER TO postgres;

--
-- Name: Groups_idGroup_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Groups_idGroup_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Groups_idGroup_seq" OWNER TO postgres;

--
-- Name: Groups_idGroup_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Groups_idGroup_seq" OWNED BY public."Groups"."idGroup";


--
-- Name: News; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."News" (
    "idNews" bigint NOT NULL,
    desciption text NOT NULL,
    photo character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."News" OWNER TO postgres;

--
-- Name: News_idNews_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."News_idNews_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."News_idNews_seq" OWNER TO postgres;

--
-- Name: News_idNews_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."News_idNews_seq" OWNED BY public."News"."idNews";


--
-- Name: PilotStats; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PilotStats" (
    "idPilotStat" bigint NOT NULL,
    "Starts" smallint NOT NULL,
    year character(4) NOT NULL,
    "Scores" character(5) NOT NULL,
    "Wins" smallint NOT NULL,
    "Podiums" smallint NOT NULL,
    "PolePos" smallint NOT NULL,
    "PlaceInSeason" smallint NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "PilotIdPilot" bigint
);


ALTER TABLE public."PilotStats" OWNER TO postgres;

--
-- Name: PilotStats_idPilotStat_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."PilotStats_idPilotStat_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."PilotStats_idPilotStat_seq" OWNER TO postgres;

--
-- Name: PilotStats_idPilotStat_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."PilotStats_idPilotStat_seq" OWNED BY public."PilotStats"."idPilotStat";


--
-- Name: Pilots; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pilots" (
    "idPilot" bigint NOT NULL,
    "PilotName" character(255) NOT NULL,
    "Nationality" character(255) NOT NULL,
    "photoPilot" character varying(255) NOT NULL,
    "photoNationality" character varying(255),
    "Age" integer NOT NULL,
    "Biography" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "TeamIdTeam" bigint
);


ALTER TABLE public."Pilots" OWNER TO postgres;

--
-- Name: Pilots_idPilot_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Pilots_idPilot_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Pilots_idPilot_seq" OWNER TO postgres;

--
-- Name: Pilots_idPilot_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pilots_idPilot_seq" OWNED BY public."Pilots"."idPilot";


--
-- Name: SavedPilots; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SavedPilots" (
    "idSavedPilot" bigint NOT NULL,
    "idPilot" bigint NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "UserIdUser" bigint,
    "PilotIdPilot" bigint,
    "idUser" bigint
);


ALTER TABLE public."SavedPilots" OWNER TO postgres;

--
-- Name: SavedPilots_idSavedPilot_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."SavedPilots_idSavedPilot_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."SavedPilots_idSavedPilot_seq" OWNER TO postgres;

--
-- Name: SavedPilots_idSavedPilot_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."SavedPilots_idSavedPilot_seq" OWNED BY public."SavedPilots"."idSavedPilot";


--
-- Name: Teams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Teams" (
    "idTeam" bigint NOT NULL,
    "teamName" character(255),
    desciption text,
    "photoTeam" character varying(255),
    hidendisc text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "GroupIdGroup" bigint
);


ALTER TABLE public."Teams" OWNER TO postgres;

--
-- Name: Teams_idTeam_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Teams_idTeam_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Teams_idTeam_seq" OWNER TO postgres;

--
-- Name: Teams_idTeam_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Teams_idTeam_seq" OWNED BY public."Teams"."idTeam";


--
-- Name: Tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Tokens" (
    "idToken" bigint NOT NULL,
    "refreshToken" character varying(1024),
    "idUser" bigint,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Tokens" OWNER TO postgres;

--
-- Name: Tokens_idToken_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Tokens_idToken_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Tokens_idToken_seq" OWNER TO postgres;

--
-- Name: Tokens_idToken_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Tokens_idToken_seq" OWNED BY public."Tokens"."idToken";


--
-- Name: Trophies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Trophies" (
    "idTrophie" bigint NOT NULL,
    "nameTrophie" character(255),
    "imageTrophie" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "PilotIdPilot" bigint
);


ALTER TABLE public."Trophies" OWNER TO postgres;

--
-- Name: Trophies_idTrophie_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Trophies_idTrophie_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Trophies_idTrophie_seq" OWNER TO postgres;

--
-- Name: Trophies_idTrophie_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Trophies_idTrophie_seq" OWNED BY public."Trophies"."idTrophie";


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    "idUser" bigint NOT NULL,
    email character(50) NOT NULL,
    login character(50) NOT NULL,
    name character(50),
    age integer,
    "isBlocked" boolean NOT NULL,
    nationality character(50),
    role character(50) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    password character varying(255)
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_idUser_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_idUser_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_idUser_seq" OWNER TO postgres;

--
-- Name: Users_idUser_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_idUser_seq" OWNED BY public."Users"."idUser";


--
-- Name: BestCircuits idBestCircuit; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BestCircuits" ALTER COLUMN "idBestCircuit" SET DEFAULT nextval('public."BestCircuits_idBestCircuit_seq"'::regclass);


--
-- Name: Groups idGroup; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Groups" ALTER COLUMN "idGroup" SET DEFAULT nextval('public."Groups_idGroup_seq"'::regclass);


--
-- Name: News idNews; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."News" ALTER COLUMN "idNews" SET DEFAULT nextval('public."News_idNews_seq"'::regclass);


--
-- Name: PilotStats idPilotStat; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PilotStats" ALTER COLUMN "idPilotStat" SET DEFAULT nextval('public."PilotStats_idPilotStat_seq"'::regclass);


--
-- Name: Pilots idPilot; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pilots" ALTER COLUMN "idPilot" SET DEFAULT nextval('public."Pilots_idPilot_seq"'::regclass);


--
-- Name: SavedPilots idSavedPilot; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SavedPilots" ALTER COLUMN "idSavedPilot" SET DEFAULT nextval('public."SavedPilots_idSavedPilot_seq"'::regclass);


--
-- Name: Teams idTeam; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Teams" ALTER COLUMN "idTeam" SET DEFAULT nextval('public."Teams_idTeam_seq"'::regclass);


--
-- Name: Tokens idToken; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tokens" ALTER COLUMN "idToken" SET DEFAULT nextval('public."Tokens_idToken_seq"'::regclass);


--
-- Name: Trophies idTrophie; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trophies" ALTER COLUMN "idTrophie" SET DEFAULT nextval('public."Trophies_idTrophie_seq"'::regclass);


--
-- Name: Users idUser; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN "idUser" SET DEFAULT nextval('public."Users_idUser_seq"'::regclass);


--
-- Data for Name: BestCircuits; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BestCircuits" ("idBestCircuit", name, photo, "bestLap", "bestLapSpeed", "timeInPitstops", "Pitstops", "createdAt", "updatedAt", "PilotIdPilot") FROM stdin;
1	Autodrome Sakhir                                  	AutodromeSakhir.png                               	1:32.608       	210.383   	24.637         	2	2024-12-05 19:30:25.184+03	2024-12-05 19:30:25.184+03	1
2	Circuit de Monaco                                 	CircuitdeMonaco.png                               	1:17.296       	155.557   	22.672         	2	2024-12-21 14:23:28.424+03	2024-12-21 14:23:28.424+03	2
3	Sepang International Circuit                      	SepangInternationalCircuit.png                    	1:39.199       	201.159   	21.295         	4	2024-12-21 14:26:22.407+03	2024-12-21 14:26:22.407+03	2
4	Red Bull Ring                                     	RedBullRing.png                                   	1:12.217       	215.650   	22.391         	2	2024-12-21 14:29:02.136+03	2024-12-21 14:29:02.136+03	2
5	Red Bull Ring                                     	RedBullRing.png                                   	1:05.619       	236.894   	23.928         	2	2024-12-21 14:33:15.89+03	2024-12-21 14:33:15.89+03	3
6	Paul Ricard Circuit                               	PaulRicardCircuit.png                             	1:35.781       	219.575   	41.875         	2	2024-12-21 14:35:21.368+03	2024-12-21 14:35:21.368+03	3
7	Silverstone Circuit                               	SilverstoneCircuit.jpg                            	1:28.293       	240.195   	29.001         	3	2024-12-21 14:36:31.838+03	2024-12-21 14:36:31.838+03	3
8	Autodrome Sakhir                                  	AutodromeSakhir.png                               	1.33.411       	208.575   	24.438         	2	2024-12-21 14:38:07.919+03	2024-12-21 14:38:07.919+03	4
9	BAKU CITY CIRCUIT                                 	BAKUCITYCIRCUIT.jpg                               	1.43.009       	209.795   	20.12          	2	2024-12-21 14:39:07.344+03	2024-12-21 14:39:07.344+03	4
11	Red Bull Ring                                     	RedBullRing.png                                   	1:07.475       	230.378   	21.24          	3	2024-12-21 14:41:52.496+03	2024-12-21 14:41:52.496+03	5
12	Istambul Park                                     	istambulpark.png                                  	1:36.806       	198.508   	23.185         	2	2024-12-21 14:43:15.539+03	2024-12-21 14:43:15.539+03	5
13	Sochi Autodrom                                    	SochiAutodrom.jpg                                 	1.37.423       	216.096   	31.247         	2	2024-12-21 14:44:16.007+03	2024-12-21 14:44:16.007+03	5
14	Autodromo di Monza                                	AutodromodiMonza.jpg                              	1:25.072       	245.142   	27.966         	2	2024-12-21 14:48:08.415+03	2024-12-21 14:48:08.415+03	6
15	Las Vegas                                         	LasVegas.png                                      	1:35.490       	233.779   	21.902         	2	2024-12-21 14:49:50.025+03	2024-12-21 14:49:50.025+03	6
16	Sahir                                             	sahir.png                                         	55.404         	230.214   	25.608         	4	2024-12-21 14:51:58.209+03	2024-12-21 14:51:58.209+03	7
17	Marina Bay Street Circuit                         	MarinaBayStreetCircuit.png                        	1:46.458       	171.211   	30.799         	4	2024-12-21 14:52:57.005+03	2024-12-21 14:52:57.005+03	7
18	Sepang International Circuit                      	SepangInternationalCircuit.png                    	1:36.701       	206.355   	29.029         	2	2024-12-21 14:54:20.602+03	2024-12-21 14:54:20.602+03	8
19	Fuji                                              	Fuji.png                                          	1:28.193       	186.259   	38.286         	1	2024-12-21 14:56:08.958+03	2024-12-21 14:56:08.958+03	8
20	Shanghai International Circuit                    	ShanghaiInternationalCircuit.jpg                  	1:36.325       	203.722   	27.827         	2	2024-12-21 14:56:54.422+03	2024-12-21 14:56:54.422+03	8
\.


--
-- Data for Name: Groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Groups" ("idGroup", "groupName", desciption, "imageGroup", hidendisc, "createdAt", "updatedAt") FROM stdin;
2	Formula 1                                                                                                                                                                                                                                                      	Formula 1 is a world championship in circuit racing, which is held annually and consists of stages, in accordance with the technical standards, requirements and rules established by the International Automobile Federation.	f1phoro.png	\N	2024-12-03 18:36:19.472+03	2024-12-03 18:36:19.472+03
3	GT3                                                                                                                                                                                                                                                            	The GT3 group, technically known as Cup Grand Touring Cars and commonly referred to simply as GT3, is a set of rules maintained by the Fédération Internationale de l'Automobile for grand tourer racing cars intended for use in various auto racing series around the world.	gt3photo.png	\N	2024-12-03 18:43:40.237+03	2024-12-03 18:43:40.237+03
4	GT4                                                                                                                                                                                                                                                            	The European GT4 Series is a GT4 car racing series organized and run by SRO Stefan Ratel and sanctioned by the FIA. This is an amateur tournament modeled on the FIA ​​GT3 European Championship, and in contrast to the FIA ​​GT Championship, where professional racers compete in GT1 and GT2 cars.	gt4photo.png	\N	2024-12-03 18:44:38.057+03	2024-12-03 18:44:38.057+03
5	nascar                                                                                                                                                                                                                                                         	The National Stock Car Racing Association, Inc. is a privately held enterprise engaged in the organization of automobile racing and related activities. Established by Bill France Sr. in 1947-1948 in the United States of America and is still owned by the France family.	nascarphoto.png	\N	2024-12-03 18:45:58.462+03	2024-12-03 18:45:58.462+03
\.


--
-- Data for Name: News; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."News" ("idNews", desciption, photo, "createdAt", "updatedAt") FROM stdin;
1	What happened at the US Grand Prix: where did Ferrari get the double?! What kind of failure is Norris?!	newsImage1.png	2024-12-06 13:49:09.34+03	2024-12-06 13:49:09.34+03
2	Helmut Marko on Perez's dismissal: It was the first time shareholders were involved	newsImage2.jpg	2024-12-21 15:11:57.612+03	2024-12-21 15:11:57.612+03
3	Guenther Steiner: Russell didn't look the smartest when he started a row with Verstappen in front of stewards	newsImage3.jpg	2024-12-21 15:15:37.762+03	2024-12-21 15:15:37.762+03
4	Christian Horner on Perez's problems: The harder you try, the slower you go	newsImage4.jpg	2024-12-21 15:16:07.272+03	2024-12-21 15:16:07.272+03
5	Charles Leclerc: Our relationship with Carlos will continue even after his departure from Ferrari	newsImage5.jpg	2024-12-21 15:16:42.565+03	2024-12-21 15:16:42.565+03
\.


--
-- Data for Name: PilotStats; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."PilotStats" ("idPilotStat", "Starts", year, "Scores", "Wins", "Podiums", "PolePos", "PlaceInSeason", "createdAt", "updatedAt", "PilotIdPilot") FROM stdin;
1	23	2024	429  	9	14	10	1	2024-12-05 13:20:11.028+03	2024-12-05 13:20:11.028+03	1
2	22	2023	575  	19	21	13	13	2024-12-05 19:13:17.05+03	2024-12-05 19:13:17.05+03	1
3	22	2022	454  	15	17	8	1	2024-12-05 19:13:46.509+03	2024-12-05 19:13:46.509+03	1
4	22	2021	395.5	10	18	9	1	2024-12-05 19:14:37.161+03	2024-12-05 19:14:37.161+03	1
5	17	2020	214  	2	11	1	3	2024-12-05 19:15:06.798+03	2024-12-05 19:15:06.798+03	1
6	21	2019	278  	3	9	3	3	2024-12-05 19:15:45.654+03	2024-12-05 19:15:45.654+03	1
7	21	2018	249  	2	11	0	4	2024-12-05 19:16:14.962+03	2024-12-05 19:16:14.962+03	1
8	24	2024	152  	0	4	0	8	2024-12-21 13:54:28.14+03	2024-12-21 13:54:28.14+03	2
9	22	2023	285  	2	9	2	2	2024-12-21 13:54:59.138+03	2024-12-21 13:54:59.138+03	2
10	22	2022	305  	2	11	1	3	2024-12-21 13:55:20.213+03	2024-12-21 13:55:20.213+03	2
11	22	2021	190  	1	5	0	4	2024-12-21 13:55:46.044+03	2024-12-21 13:55:46.044+03	2
12	23	2024	290  	2	9	1	5	2024-12-21 13:57:11.305+03	2024-12-21 13:57:11.305+03	3
13	22	2023	200  	1	3	2	7	2024-12-21 13:57:37.283+03	2024-12-21 13:57:37.283+03	3
14	22	2022	246  	1	9	2	5	2024-12-21 13:57:55.015+03	2024-12-21 13:57:55.015+03	3
15	22	2021	164.5	0	4	0	5	2024-12-21 13:58:22.736+03	2024-12-21 13:58:22.736+03	3
16	24	2024	356  	0	6	4	3	2024-12-21 13:59:15.094+03	2024-12-21 13:59:15.094+03	4
17	22	2023	206  	3	6	4	5	2024-12-21 13:59:51.037+03	2024-12-21 13:59:51.037+03	4
18	22	2022	308  	3	11	9	2	2024-12-21 14:00:13.804+03	2024-12-21 14:00:13.804+03	4
19	22	2021	159  	0	1	2	7	2024-12-21 14:00:41.947+03	2024-12-21 14:00:41.947+03	4
20	17	2020	98   	0	2	0	8	2024-12-21 14:01:02.022+03	2024-12-21 14:01:02.022+03	4
21	21	2019	264  	2	10	6	4	2024-12-21 14:01:26.195+03	2024-12-21 14:01:26.195+03	4
22	24	2024	374  	4	13	8	2	2024-12-21 14:02:10.052+03	2024-12-21 14:02:10.052+03	5
23	22	2023	205  	0	7	0	6	2024-12-21 14:02:29.423+03	2024-12-21 14:02:29.423+03	5
24	22	2022	122  	0	1	0	7	2024-12-21 14:02:47.503+03	2024-12-21 14:02:47.503+03	5
25	22	2021	160  	0	4	1	6	2024-12-21 14:03:06.602+03	2024-12-21 14:03:06.602+03	5
26	17	2020	97   	0	1	0	9	2024-12-21 14:03:27.247+03	2024-12-21 14:03:27.247+03	5
27	21	2019	49   	0	0	0	11	2024-12-21 14:03:46.558+03	2024-12-21 14:03:46.558+03	5
29	24	2024	292  	2	8	0	4	2024-12-21 14:07:46.753+03	2024-12-21 14:07:46.753+03	6
30	22	2023	97   	0	2	0	9	2024-12-21 14:08:04.275+03	2024-12-21 14:08:04.275+03	6
31	24	2024	245  	2	4	3	6	2024-12-21 14:09:00.963+03	2024-12-21 14:09:00.963+03	7
32	22	2023	175  	0	2	0	8	2024-12-21 14:09:24.976+03	2024-12-21 14:09:24.976+03	7
33	22	2022	275  	0	2	1	4	2024-12-21 14:09:41.136+03	2024-12-21 14:09:41.136+03	7
34	22	2021	16   	0	1	0	15	2024-12-21 14:10:09.305+03	2024-12-21 14:10:09.305+03	7
35	24	2024	223  	2	5	0	7	2024-12-21 14:10:44.094+03	2024-12-21 14:10:44.094+03	8
36	22	2023	234  	0	6	1	3	2024-12-21 14:11:07.619+03	2024-12-21 14:11:07.619+03	8
37	22	2022	240  	0	9	0	6	2024-12-21 14:11:22.131+03	2024-12-21 14:11:22.131+03	8
38	22	2021	387.5	8	17	6	2	2024-12-21 14:11:43.425+03	2024-12-21 14:11:43.425+03	8
39	16	2020	347  	11	14	10	1	2024-12-21 14:12:07.878+03	2024-12-21 14:12:07.878+03	8
40	21	2019	413  	11	17	5	1	2024-12-21 14:12:33.173+03	2024-12-21 14:12:33.173+03	8
41	21	2018	408  	11	17	11	1	2024-12-21 14:19:17.555+03	2024-12-21 14:19:17.555+03	8
\.


--
-- Data for Name: Pilots; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pilots" ("idPilot", "PilotName", "Nationality", "photoPilot", "photoNationality", "Age", "Biography", "createdAt", "updatedAt", "TeamIdTeam") FROM stdin;
1	Max Verstappen                                                                                                                                                                                                                                                 	Netherlands                                                                                                                                                                                                                                                    	MaxVerstappen.png	Netherlands.png	27	 Born to go fast, Max Verstappen, son of former Formula 1 driver Jos Verstappen, is the youngest race winner in Formula 1 history. Max was born fast. His father, Jos Verstappen, was an F1 racer. His mother, Sophie, was a successful karter. At the age of six, the younger Verstappen was already regularly driving a kart, and at eight he took part in his first serious competition, where he won all the races. By 2013, Max Verstappen had won almost all the titles that could be won in karting, and at 16 he moved up to Formula 3. He didn’t stay there long, and in August 2014, just 17 years old, he made his debut in an official Formula 1 weekend session, becoming the youngest driver in F1 history. In the first race, the 181 cm tall, 71 kg athlete found himself in an ill-fitting car seat, but this did not prevent him from becoming fourth in qualifying and, after a Mercedes crash, from triumphantly winning the Spanish Grand Prix. In the following stages, Verstappen demonstrated the stubborn character inherent in representatives of Belgian nationality and people born under the zodiac sign of Libra, and by the end of the year he had recorded 4 silver and 2 bronze podiums, as well as 7 races with points.	2024-12-03 19:06:04.096+03	2024-12-03 19:06:04.096+03	2
2	Sergio Perez                                                                                                                                                                                                                                                   	Mexico                                                                                                                                                                                                                                                         	SergioPerez.png	Mexico.png	34	His young age, notable successes in junior series and the support of a major sponsor drew the attention of a number of Formula 1 teams to Perez. In 2011, he signed a contract with the Swiss team Sauber. The Mexican already finished in the points zone several times in his first season, and only a number of controversial technical decisions by the team and a serious accident at the Monaco Grand Prix, which cost Perez two races, prevented him from achieving more than sixteenth place in the personal standings. A year later, the situation improved significantly - at the Malaysian Grand Prix and the Italian Grand Prix, he finished in second position, comparatively slightly behind the winners and noticeably ahead of everyone else. Perez's progress also interested many leaders of the peloton - even before his debut in the world championship, he was enrolled in the Ferrari young pilot support program, and in September 2012, after a number of bright races for Sauber, he signed a contract with McLaren, which was looking for a replacement for Lewis Hamilton, who had left for Mercedes. After spending only a year at McLaren, during which Perez never finished higher than fifth in a race, the Mexican left the team. Perez moved to the Force India team, which also used Mercedes engines like McLaren. The Indian team built a good chassis, and the German engine allowed the team to compete in the sub-elite group of the peloton. Not everything went perfectly, but at the Bahrain Grand Prix, Perez brought his team its first podium finish in almost five years. Subsequently, Perez lost many important points due to his own mistakes, but by the end of the season he finished in the points group 12 times, finishing the championship in tenth place, losing to teammate Nico Hulkenberg, but ahead of Kevin Magnussen, who became his replacement at McLaren. On December 6, 2020, he took his first victory at the Sakhir Grand Prix. This victory was also the first for his Racing Point team.	2024-12-03 20:07:37.24+03	2024-12-03 20:07:37.24+03	2
3	Carlos Sainz                                                                                                                                                                                                                                                   	Spain                                                                                                                                                                                                                                                          	CarlosSainz.png	Spain.png	34	On May 14, 2020, it was announced that the Spanish driver would be racing for Scuderia Ferrari from the 2021 season on a two-year contract. Carlos Sainz replaced Sebastian Vettel in the Italian team. In his first season with Ferrari, he showed consistent results, finishing fifth in the championship, while climbing to the podium four times. In the driver's standings, Sainz was 5.5 points ahead of his teammate Charles Leclerc. In 2022, Carlos Sainz started the season with high expectations, as Ferrari showed improvements in car performance, especially at the beginning of the championship. Despite this, the first few races were not easy. In the first races, Sainz faced a number of difficulties, such as retirements and mistakes, which cost him important points. However, he quickly returned to the fight, showing consistent results. The highlight of the season for him was the British Grand Prix, where Sainz took his first career pole and then his first Formula 1 win, which was a major achievement for both him and Ferrari. An emotional victory at Silverstone was a testament to his perseverance and ability to get the most out of the car, even in a highly competitive environment. However, the season was not without its problems - despite the victory, Carlos continued to suffer mechanical problems and failures in the team's strategies, which led to points being lost in a number of races. As a result, Sainz again finished the championship in fifth place in the drivers' standings. In 2023, Ferrari continued to face performance issues with the car, making it difficult to fight for podiums and top positions. Despite this, Sainz continued to produce good results, including several podium finishes and one win at the Singapore Grand Prix. He remained an important part of the team, demonstrating adaptability and the ability to fight even in difficult conditions. In the drivers' championship, Sainz finished seventh, scoring 200 points.	2024-12-03 20:12:06.97+03	2024-12-03 20:12:06.97+03	6
4	Charles Leclerc                                                                                                                                                                                                                                                	Monaco                                                                                                                                                                                                                                                         	CharlesLeclerc.png	Monaco.png	27	The young man quickly burst into the world of motor racing and achieved stunning success in the first years of his career - he became the champion of the GP3 series and secured the title in Formula 2 races ahead of schedule. In 2016, Charles joined the Ferrari youth academy and spent several training sessions at Haas. Leclerc worked with psychologists, got rid of excessive emotionality, which affected the results - the driver stopped going off the track. Charles made his F-1 debut as part of the Alfa Romeo Sauber team, and in 2018, he scored his first points in Baku, taking 6th place in the standings. Soon an invitation from Scuderia Ferrari followed, and they saw him as the successor to Kimi Raikkonen. Leclerc had a successful season, became the youngest Ferrari driver since 1961, and won the competition against Marcus Ericsson. Charles rarely makes mistakes on the track, his defeats are often associated with an unsuccessful strategy chosen by the team for the race. Leclerc is a good defensive operative and aggressive in corners. Despite his youth, he has taken third place in the number of pole positions (16) among Ferrari drivers in history. The driver currently has a contract until 2024 with the option to leave the team if it falls below third place in the Constructors' Championship at the end of the season. In 2022, new Formula 1 regulations came into force, limiting team budgets and encouraging the introduction of new design solutions. Leclerc was the best prepared for the changes, winning two races at the start of the season, holding an interim second place in the final rankings and winning the first Grand Slam of his career at the Australian Grand Prix.	2024-12-03 20:15:38.008+03	2024-12-03 20:15:38.008+03	6
5	Lando Norris                                                                                                                                                                                                                                                   	United Kingdom                                                                                                                                                                                                                                                 	LandoNorris.png	UK.png	25	After the competition in Russia, Norris failed to finish in the top 5 in any of the remaining seven races in 2021. He finished the season in sixth place in the standings. In February 2022, Lando agreed to an extension of his contract with McLaren. He then took bronze at the Emilia Romagna Grand Prix. In Miami, Norris's MCL36 collided with Pierre Gasly's Alpha Tauri, causing him to retire. Then, despite tonsillitis (an infectious disease characterized by damage to one or more tonsils), Lando Norris finished sixth at the Monaco Grand Prix and set the fastest lap there. In May 2023, Charles Leclerc blocked his car at the competition in Monaco, forcing Lando to slow down. After examining the incident, the judges confirmed the Monegasque driver's guilt. In July, a race took place in Great Britain. Max Verstappen became the winner of the qualifying round. Immediately after him, the Bristol native crossed the finish line, and Oscar Piastri closed the top three. In addition, Lando had a funny incident after the race in Hungary. At the end of July 2023, the driver found himself on the second step of the podium, while Verstappen took the first position. The silver medalist, opening a bottle of champagne, hit it on the podium. The winner's cup was located nearby. From the impact, it fell and broke. Lando finished the season in sixth place, which was a repeat of his best result in his career, set in 2021.	2024-12-03 20:21:10.613+03	2024-12-03 20:21:10.613+03	7
6	Oscar Piastri                                                                                                                                                                                                                                                  	Australia                                                                                                                                                                                                                                                      	OscarPiastri.png	Australia.png	23	In December 2020, it was announced that Piastri would take part in Formula 2 in the 2021 season as part of the Prema Racing team, becoming a teammate to Robert Shwartzman. With the same team, he took part in the Formula 2 post-season tests in Bahrain. He won his first victory of the season at the first round in Bahrain in the second sprint, overtaking the experienced Zhou Guanyu, also a member of the Alpine Academy, on the last lap. At the Silverstone round, he won his first pole position of the season, and finished third in the main Sunday race, letting Zhou Guanyu and Dan Ticktum pass. Despite this, thanks to finishing in the points in the Saturday races, Oscar took the lead in the championship after the Silverstone round. At the next round in Monza, Oscar again won pole position and won the Sunday race. Later, at all the remaining rounds of the season in Sochi, Jeddah and Abu Dhabi, he won pole positions and won four races, three of them on Sunday and one - the Saturday sprint in Jeddah. As a result, he became champion ahead of schedule two races before the end of the season. During the season, he won six races, started from pole positions in Sunday races five times, climbed to the podium 11 times and beat his closest rival in the championship Robert Shwartzman by 60.5 points. In January 2020, he joined the Renault Sports Academy. In October 2020, at the Sakhir circuit, he took part in the Renault Sports Academy tests, getting behind the wheel of a Formula 1 car for the first time. On November 16, 2021, Alpine announced that Piastri would become the team's reserve driver for the 2022 season. In December 2021, he took part in the Formula 1 youth tests as part of the Alpine team.	2024-12-03 20:25:54.866+03	2024-12-03 20:25:54.866+03	7
7	George Russell                                                                                                                                                                                                                                                 	United Kingdom                                                                                                                                                                                                                                                 	GeorgeRussell.png	UK.png	26	It became clear to Formula 1 fans almost immediately that Russell's Mercedes M10 EQ Power would be at the back of the field in the 2019 season. However, this did not stop George from teaming up with Robert Kubica. The races were disappointing due to the lack of engine power. In his debut championship, the Briton finished in the top twenty, without a single point. In 2020, the starts were postponed due to the coronavirus pandemic. The Williams Racing management, which lost its main sponsor and decided to settle its financial problems at the expense of its second pilot Nicholas Latifi, did not expect a satisfactory result. Meanwhile, the Mercedes team, which trained George for the royal races, dominated the season and took prize places. World Champion Lewis Hamilton, who partially surpassed the results of the legendary Michael Schumacher, continued to break records and won another title ahead of schedule. Russell finished the 2020 season behind the wheel of a Williams Racing car. After qualifying in 18th place, he finished 16th, behind former Formula 2 colleagues Alex Albon and Lando Norris from the Red Bull Racing and McLaren F1 Team. September 2021 was a significant date for George - he signed a contract with Mercedes. According to the terms of the contract, the driver was to become champion Hamilton's teammate in 2022. In an interview, Russell emphasized that he was happy with such trust, but had no illusions about himself, perfectly understanding the level of his teammate. But this same circumstance instilled in him the belief that as a result of such cooperation, he would also improve his own skills. Lewis and George managed to talk immediately after signing the contract - the seven-time champion congratulated his colleague.	2024-12-03 20:36:31.526+03	2024-12-03 20:36:31.526+03	9
8	Lewis Hamilton                                                                                                                                                                                                                                                 	United Kingdom                                                                                                                                                                                                                                                 	LewisHamilton.png	UK.png	39	In 2007, Hamilton made his debut in Formula 1 competitions as part of the McLaren Mercedes team. His partner was Spaniard Fernando Alonso, a more experienced and mature racer. For some time, the men worked harmoniously, but soon the ambitious Lewis surpassed his colleague, which caused conflicts between the pilots. The disagreements turned into a reason for numerous attacks on Hamilton from Alonso's fans, which had an openly racist tint. Fernando openly condemned the actions of his fans, but the irreconcilable rivalry between the leading athletes remained. Hamilton's biography as a Formula 1 driver is full of bright victories and unexpected turns. Sharks of the pen believe that to some extent Lewis himself provokes conflicts with other racers and team members, not shying away from prohibited techniques. Unlike his strained relationship with Fernando Alonso, Hamilton had a strong friendship with Nico Rosberg, although the two Mercedes drivers later became the closest rivals for the championship title. In 2016, Rosberg finally overtook Lewis in points. After undisputed victories in 2008, 2014, 2015, 2017, 2018, 2019 and 2020, Hamilton became a seven-time world champion. Moreover, with his 92nd victory at the Grand Prix in Portugal, Lewis broke Schumacher's record. There were reports in the press that Hamilton would retire after a successful 2020 season. But Lewis told fans and critics that he was not ending his career. And 2021 started off well for the athlete. Lewis Hamilton won the Grand Prix in Bahrain, beating Max Verstappen.	2024-12-03 20:39:00.817+03	2024-12-03 20:39:00.817+03	9
\.


--
-- Data for Name: SavedPilots; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SavedPilots" ("idSavedPilot", "idPilot", "createdAt", "updatedAt", "UserIdUser", "PilotIdPilot", "idUser") FROM stdin;
14	1	2024-12-19 21:47:06.778+03	2024-12-19 21:47:06.778+03	\N	\N	80
24	2	2024-12-21 15:25:54.88+03	2024-12-21 15:25:54.88+03	\N	\N	81
\.


--
-- Data for Name: Teams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Teams" ("idTeam", "teamName", desciption, "photoTeam", hidendisc, "createdAt", "updatedAt", "GroupIdGroup") FROM stdin;
2	Red Bull                                                                                                                                                                                                                                                       	Red Bull Racing, currently competing as Oracle Red Bull Racing and also known simply as Red Bull or RBR, is an Austrian-licensed Formula One racing team based in the United Kingdom.	photo-redbull.png	Red Bull had Cosworth engines in 2005 and Ferrari engines in 2006. The team used engines supplied by Renault between 2007 and 2018 (from 2016 to 2018, the Renault engine was re-badged TAG Heuer following the breakdown in the relationship between Red Bull and Renault in 2015). During this partnership, they won four successive Drivers' and Constructors' Championship titles from 2010 to 2013, becoming the first Austrian team to win the title. The team began using Honda engines in 2019. The works Honda partnership culminated in 2021 following Red Bull driver Max Verstappen's World Drivers' Championship victory, with Verstappen also winning the championship in 2022 and 2023. Honda left the sport officially after 2021 but is set to continue to supply complete engines from Japan to the team partly under Red Bull Powertrains branding until the end of 2025.	2024-12-03 18:51:36.8+03	2024-12-21 15:39:06.797+03	2
3	Aston Martin                                                                                                                                                                                                                                                   	Aston Martin is a British racing team created to participate in the Formula 1 World Championship based on the Racing Point team after businessman Lawrence Stroll purchased a 20% interest in the Aston Martin company. The team's base is located in Silverstone, UK.	photo-aston.png	Aston Martin first appeared in the Formula One World Championship in 1957 with the DBR4, but the team did not make its debut until 1959 as the company concentrated on developing the DBR1, which would win Le Mans in 1959. The team's drivers were Roy Salvadori and Carroll Shelby. The team took part in four World Championship Grands Prix, but scored no points. Both cars failed to finish the Dutch Grand	2024-12-03 18:52:53.531+03	2024-12-21 15:39:08.976+03	2
5	Haas                                                                                                                                                                                                                                                           	Haas is an American auto racing team created to compete in the Formula One World Championship by Gene Haas, co-founder of the Stewart-Haas Racing NASCAR team.	photo-haas.png	Haas is the first American team to enter Formula One since the failed US F1 Team, which was planned to start in 2010. It is also the first American team to reach the championship since the unrelated Haas Lola team (which competed in the 1985 and 1986 seasons). In 2014, the team purchased its headquarters in Banbury, which was put up for auction during the sale of the assets of the defunct Marussia; Guenther Steiner was appointed team principal, with Rob Taylor becoming the team's chief designer. On 29 September 2015, the team signed a contract for 2016 with Romain Grosjean, and on 30 October with Esteban Gutierrez.	2024-12-03 18:56:47.33+03	2024-12-21 15:39:12.717+03	2
6	Ferrari                                                                                                                                                                                                                                                        	Translated from English.-Scuderia Ferrari, currently racing under the name Scuderia Ferrari HP, is the racing division of the Italian luxury car manufacturer Ferrari and a racing team that competes in Formula One racing. The team is also known by the nickname The Prancing Horse in reference to their logo.	photo-ferrari.png	The Ferrari team was founded by Enzo Ferrari in 1929 as a sponsor for amateur racing drivers in various events, although Ferrari himself had raced Fiats before that date. The idea was conceived over dinner in Bologna on November 16, where Ferrari sought financial help from Augusto and Alfredo Caniato, heirs to a textile business, and wealthy amateur racing driver Mario Tadini. He then assembled a team that at its peak included more than forty drivers, most of them Alfa Romeos. Enzo himself continued racing until the birth of his first son, Dino, in 1932.	2024-12-03 18:57:47.744+03	2024-12-21 15:39:14.659+03	2
7	McLaren                                                                                                                                                                                                                                                        	After our first taste of victory in F1 at the 1968 Belgian Grand Prix, McLaren has gone on to secure 188 grand prix wins, winning 12 Drivers' World Championships and eight Constructors' World Championships.	photo-mclaren.png	The McLaren F1 was first shown at the Monaco Grand Prix on May 28, 1992, with McLaren wanting to emphasize the car's connection to racing. During the demonstration, the technical specifications and price were announced. The appearance made a good impression on observers: for that time, such a design personified a modern car. This car set a world supercar speed record, accelerating to 386 km per hour, the record was recorded on March 31, 1993.	2024-12-03 18:59:06.771+03	2024-12-21 15:39:16.557+03	2
1	Alphin                                                                                                                                                                                                                                                         	Alpine F1 Team, which currently races as the BWT Alpine F1 Team for sponsorship reasons, is the name under which the Enstone-based Formula One team has competed since the start of the 2021 Formula One World Championship.	photo-alphin.png	The team has a long history of participation in the Formula 1 World Championship, it was founded by Ted Toleman in 1977. The headquarters are located in Enstone, Britain. The team first appears in the 1981 season under the name Toleman. In May 1985, the team gets a new sponsor - Benetton, an Italian clothing manufacturer. Before the start of the 1986 season, Benetton buys out Toleman and creates a team of the same name. After the purchase, the team's business went up. Many famous drivers competed for Benetton - Gerhard Berger, Nelson Piquet, Jean Alesi, Giancarlo Fisichella. And also the future seven-time world champion Michael Schumacher, who won his first two titles with Benetton.	2024-12-03 18:50:35.157+03	2024-12-21 15:39:04.234+03	2
8	Ford Mustang                                                                                                                                                                                                                                                   	Mustang® racing has always been associated with legendary on-track performances from Daytona to Bathurst, Indianapolis, Pomona and Le Mans. Now the Blue Oval is returning to the Circuit de la Sarthe. It’s officially entering the global FIA GT3 category and racing in 2024 — with the Mustang GT3 race car — based on the 2024 Mustang Dark Horse™ model..	photo-ford.png	Ford Performance continued its partnership with Multimatic to produce the precision-crafted Mustang® GT3 race car. It’s raring to help you set personal bests on every lap.Features include: Bespoke Short-Long Arm Suspension, Rear-Mounted Transaxle Gearbox, Carbon Fiber Body Panels, Unique Aero Package	2024-12-03 19:00:56.67+03	2024-12-21 15:39:19.965+03	3
4	Williams                                                                                                                                                                                                                                                       	Williams is a British Formula 1 team. Nine-time winner of the Formula 1 constructors' championship. The team was founded by Frank Williams and Patrick Head in 1977, after Williams' previous project, Frank Williams Racing Cars, ended unsuccessfully.	photo-williams.png	The team was born out of racing enthusiast Frank Williams and racing driver Piers Courage entering a Brabham customer chassis in the 1968 European Formula Two Championship. Having achieved some good results in Formula Two, Williams and Courage decided to enter Formula One racing in 1969, using a Brabham BT26A chassis. The result was two second places for Courage at the 1969 Monaco Grand Prix and the 1969 United States Grand Prix. In 1970, Williams bought a March 701 chassis, later upgraded to the March 711, but the results were poor. Henri Pescarolo took one 4th place and one 6th place, finishing 17th at the end of the season. The team was seriously short of funds.	2024-12-03 18:55:43.133+03	2024-12-21 15:39:10.919+03	2
9	Mercedes                                                                                                                                                                                                                                                       	Mercedes (full name Mercedes AMG Petronas Motorsport) is a German automobile manufacturing team that competes in the Formula One Grand Prix. Eight-time winner of the Constructors' Cup in 2014, 2015, 2016, 2017, 2018, 2019, 2020 and 2021. The Daimler-Benz concern debuted in Formula 1 in 1954 and participated with great success in the 1954–1955 seasons. 	Mercedes.png	However, the company left the series after the 1955 season, and despite supplying engines in the 1990s and 2000s, did not return as a works team until November 2009. Former Williams driver Nico Rosberg was joined by seven-time world champion Michael Schumacher, who had returned to Formula 1, while Nick Heidfeld became the team's reserve driver. Schumacher ended his career in Formula 1 at the end of 2012. And Nico Rosberg's new teammate was 2008 champion Lewis Hamilton. Since the 2014 season, in its fifth year of participation in the championship, the team has completely dominated other teams. Hamilton became the champion in 2014-2015, while Rosberg won the title of vice-champion both times. In 2016, they swapped places - Rosberg became the champion, and two days after winning the title, he announced his retirement from motorsport. Hamilton's new teammate was Valtteri Bottas	2024-12-03 20:33:42.036+03	2024-12-21 15:39:33.264+03	2
\.


--
-- Data for Name: Tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Tokens" ("idToken", "refreshToken", "idUser", "createdAt", "updatedAt") FROM stdin;
79	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRHRvIjp7ImVtYWlsIjoiR2VyaW5lcUB5YW5kZXgucnUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiLCJpZCI6IjgxIiwibG9naW4iOiJHZXJpbmVxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICIsIm5hbWUiOiLRhNGL0LLRhNGL0LLRhNGL0LIiLCJhZ2UiOjIwLCJuYXRpb25hbGl0eSI6IkJlbGFydXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwicm9sZSI6InVzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiaXNCbG9ja2VkIjpmYWxzZX0sImlhdCI6MTczNDY4MzkwMCwiZXhwIjoxNzM1MTE1OTAwfQ.MBAnQIJtWRM3JhMTGgVBycE4d72Z6pJ6ohlMDJa9gQI	81	2024-12-20 11:21:27.414+03	2024-12-20 11:38:20.394+03
\.


--
-- Data for Name: Trophies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Trophies" ("idTrophie", "nameTrophie", "imageTrophie", "createdAt", "updatedAt", "PilotIdPilot") FROM stdin;
1	World Champion Cup 2023                                                                                                                                                                                                                                        	WorldChampionCup2023.jpg	2024-12-05 11:32:40.305+03	2024-12-05 11:32:40.305+03	1
2	Grand Prix Lenovo 2023                                                                                                                                                                                                                                         	GrandPrixLenovoCup.jpg	2024-12-05 11:50:08.356+03	2024-12-05 11:50:08.356+03	1
3	2010 silver GP2                                                                                                                                                                                                                                                	2010-silver-GP2.png	2024-12-21 14:59:43.74+03	2024-12-21 14:59:43.74+03	2
4	2023 silver F1                                                                                                                                                                                                                                                 	2023-silver-F1.png	2024-12-21 15:00:16.696+03	2024-12-21 15:00:16.696+03	2
5	2014 gold FRenault3.5                                                                                                                                                                                                                                          	2014-gold-FRenault35.png	2024-12-21 15:02:15.099+03	2024-12-21 15:02:15.099+03	3
6	2016 gold GP3                                                                                                                                                                                                                                                  	2016-gold-GP3.png	2024-12-21 15:03:43.732+03	2024-12-21 15:03:43.732+03	4
7	2017 gold F2                                                                                                                                                                                                                                                   	2017-gold-F2.png	2024-12-21 15:03:59.586+03	2024-12-21 15:03:59.586+03	4
8	2022 silver                                                                                                                                                                                                                                                    	2022-silver.png	2024-12-21 15:04:14.981+03	2024-12-21 15:04:14.981+03	4
9	2024 bronze                                                                                                                                                                                                                                                    	2024-bronze.png	2024-12-21 15:04:53.199+03	2024-12-21 15:04:53.199+03	4
10	2018 silver F2                                                                                                                                                                                                                                                 	2018-silver-F2.png	2024-12-21 15:05:40.852+03	2024-12-21 15:05:40.852+03	5
11	2024 silver                                                                                                                                                                                                                                                    	2024-silver.png	2024-12-21 15:05:54.115+03	2024-12-21 15:05:54.115+03	5
12	2020 gold F3                                                                                                                                                                                                                                                   	2020-gold-F3.png	2024-12-21 15:06:28.736+03	2024-12-21 15:06:28.736+03	6
13	2021 gold F2                                                                                                                                                                                                                                                   	2021-gold-F2.png	2024-12-21 15:06:42.842+03	2024-12-21 15:06:42.842+03	6
14	2017 gold GP3                                                                                                                                                                                                                                                  	2017-gold-GP3.png	2024-12-21 15:07:12.539+03	2024-12-21 15:07:12.539+03	7
15	2018 gold F2                                                                                                                                                                                                                                                   	2018-gold-F2.png	2024-12-21 15:07:37.833+03	2024-12-21 15:07:37.833+03	7
16	2014 gold                                                                                                                                                                                                                                                      	2014-gold.png	2024-12-21 15:08:11.167+03	2024-12-21 15:08:11.167+03	8
17	2016 silver                                                                                                                                                                                                                                                    	2016-silver.png	2024-12-21 15:08:37.782+03	2024-12-21 15:08:37.782+03	8
18	2017 gold                                                                                                                                                                                                                                                      	2017-gold.png	2024-12-21 15:08:51.277+03	2024-12-21 15:08:51.277+03	8
19	2018 gold                                                                                                                                                                                                                                                      	2018-gold.png	2024-12-21 15:09:09.047+03	2024-12-21 15:09:09.047+03	8
20	2019 gold                                                                                                                                                                                                                                                      	2019-gold.png	2024-12-21 15:09:16.857+03	2024-12-21 15:09:16.857+03	8
21	2020 gold                                                                                                                                                                                                                                                      	2020-gold.png	2024-12-21 15:09:25.883+03	2024-12-21 15:09:25.883+03	8
22	2021 gold                                                                                                                                                                                                                                                      	2021-gold.png	2024-12-21 15:10:03.353+03	2024-12-21 15:10:03.353+03	1
23	2022 gold                                                                                                                                                                                                                                                      	2022-gold.png	2024-12-21 15:10:11.641+03	2024-12-21 15:10:11.641+03	1
24	2023 gold                                                                                                                                                                                                                                                      	2023-gold.png	2024-12-21 15:10:22.657+03	2024-12-21 15:10:22.657+03	1
25	2024 gold                                                                                                                                                                                                                                                      	2024-gold.png	2024-12-21 15:10:30.914+03	2024-12-21 15:10:30.914+03	1
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" ("idUser", email, login, name, age, "isBlocked", nationality, role, "createdAt", "updatedAt", password) FROM stdin;
81	Gerineq@yandex.ru                                 	Gerineq                                           	фывфывфыв                                         	20	f	Belarus                                           	user                                              	2024-12-20 11:21:27.403+03	2024-12-20 11:38:20.387+03	$2b$04$fh0d1Inggbf2dWcGRhBqJOKSxC2b5OpgLfmKmBdxtoagpB6btj.pW
79	dimamirankov63@gmail.com                          	Gerineq                                           	Dmitry Mirankov                                   	20	f	Belarus                                           	admin                                             	2024-12-10 20:14:53.514+03	2024-12-12 13:10:51.866+03	$2b$04$C6tVRN2WZPgP1M/KRTBlvO09aY668k1dNqnbJ/oqc1BYc.eslf3mi
80	dima.mirankov@mail.ru                             	LastFast                                          	Dmitry                                            	21	f	Belarus                                           	user                                              	2024-12-11 13:35:19.276+03	2024-12-13 14:26:49.94+03	$2b$04$HyTdUznwjSdmzsoJBbKao.i5bzXSTTQ3.RPOG01.dkznUs0BP4K.K
\.


--
-- Name: BestCircuits_idBestCircuit_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."BestCircuits_idBestCircuit_seq"', 20, true);


--
-- Name: Groups_idGroup_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Groups_idGroup_seq"', 5, true);


--
-- Name: News_idNews_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."News_idNews_seq"', 5, true);


--
-- Name: PilotStats_idPilotStat_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."PilotStats_idPilotStat_seq"', 41, true);


--
-- Name: Pilots_idPilot_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pilots_idPilot_seq"', 8, true);


--
-- Name: SavedPilots_idSavedPilot_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."SavedPilots_idSavedPilot_seq"', 24, true);


--
-- Name: Teams_idTeam_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Teams_idTeam_seq"', 9, true);


--
-- Name: Tokens_idToken_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Tokens_idToken_seq"', 79, true);


--
-- Name: Trophies_idTrophie_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Trophies_idTrophie_seq"', 25, true);


--
-- Name: Users_idUser_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_idUser_seq"', 81, true);


--
-- Name: BestCircuits BestCircuits_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BestCircuits"
    ADD CONSTRAINT "BestCircuits_pkey" PRIMARY KEY ("idBestCircuit");


--
-- Name: Groups Groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Groups"
    ADD CONSTRAINT "Groups_pkey" PRIMARY KEY ("idGroup");


--
-- Name: News News_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."News"
    ADD CONSTRAINT "News_pkey" PRIMARY KEY ("idNews");


--
-- Name: PilotStats PilotStats_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PilotStats"
    ADD CONSTRAINT "PilotStats_pkey" PRIMARY KEY ("idPilotStat");


--
-- Name: Pilots Pilots_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pilots"
    ADD CONSTRAINT "Pilots_pkey" PRIMARY KEY ("idPilot");


--
-- Name: SavedPilots SavedPilots_UserIdUser_PilotIdPilot_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SavedPilots"
    ADD CONSTRAINT "SavedPilots_UserIdUser_PilotIdPilot_key" UNIQUE ("UserIdUser", "PilotIdPilot");


--
-- Name: SavedPilots SavedPilots_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SavedPilots"
    ADD CONSTRAINT "SavedPilots_pkey" PRIMARY KEY ("idSavedPilot");


--
-- Name: Teams Teams_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Teams"
    ADD CONSTRAINT "Teams_pkey" PRIMARY KEY ("idTeam");


--
-- Name: Tokens Tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tokens"
    ADD CONSTRAINT "Tokens_pkey" PRIMARY KEY ("idToken");


--
-- Name: Trophies Trophies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trophies"
    ADD CONSTRAINT "Trophies_pkey" PRIMARY KEY ("idTrophie");


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("idUser");


--
-- Name: BestCircuits BestCircuits_PilotIdPilot_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BestCircuits"
    ADD CONSTRAINT "BestCircuits_PilotIdPilot_fkey" FOREIGN KEY ("PilotIdPilot") REFERENCES public."Pilots"("idPilot") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: PilotStats PilotStats_PilotIdPilot_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PilotStats"
    ADD CONSTRAINT "PilotStats_PilotIdPilot_fkey" FOREIGN KEY ("PilotIdPilot") REFERENCES public."Pilots"("idPilot") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Pilots Pilots_TeamIdTeam_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pilots"
    ADD CONSTRAINT "Pilots_TeamIdTeam_fkey" FOREIGN KEY ("TeamIdTeam") REFERENCES public."Teams"("idTeam") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: SavedPilots SavedPilots_PilotIdPilot_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SavedPilots"
    ADD CONSTRAINT "SavedPilots_PilotIdPilot_fkey" FOREIGN KEY ("PilotIdPilot") REFERENCES public."Pilots"("idPilot") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SavedPilots SavedPilots_UserIdUser_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SavedPilots"
    ADD CONSTRAINT "SavedPilots_UserIdUser_fkey" FOREIGN KEY ("UserIdUser") REFERENCES public."Users"("idUser") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Teams Teams_GroupIdGroup_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Teams"
    ADD CONSTRAINT "Teams_GroupIdGroup_fkey" FOREIGN KEY ("GroupIdGroup") REFERENCES public."Groups"("idGroup") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Trophies Trophies_PilotIdPilot_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trophies"
    ADD CONSTRAINT "Trophies_PilotIdPilot_fkey" FOREIGN KEY ("PilotIdPilot") REFERENCES public."Pilots"("idPilot") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

