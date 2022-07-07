/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     07/07/2022 1:15:27 PM                        */
/*==============================================================*/
CREATE SCHEMA IF NOT EXISTS `internshipDB` ;
USE `internshipDB` ;



drop table if exists HR;

drop table if exists INTERN;

drop table if exists INTERNSHIP;

drop table if exists RECRUITER;

drop table if exists STORY;

/*==============================================================*/
/* Table: HR                                                    */
/*==============================================================*/
create table HR
(
   ID_HR                int not null,
   ID                   int not null,
   EMAIL                varchar(50),
   PSW                  varchar(30),
   IMAGE_HR             longblob,
   primary key (ID_HR)
);

/*==============================================================*/
/* Table: INTERN                                                */
/*==============================================================*/
create table INTERN
(
   ID_INTERN            int not null,
   NOM_INTERN           varchar(30),
   PRENOM_INTERN        varchar(30),
   REGION_INTERN        varchar(50),
   IMAGE_INTERN         longblob,
   INTERNMAIL           varchar(40),
   INTERNPSS            varchar(20),
   primary key (ID_INTERN)
);

/*==============================================================*/
/* Table: INTERNSHIP                                            */
/*==============================================================*/
create table INTERNSHIP
(
   ID                   int not null,
   ID_INTERN            int not null,
   REGION_COMPAGNE      varchar(50),
   MISSION              text,
   DATE_DEB             datetime,
   primary key (ID)
);

/*==============================================================*/
/* Table: RECRUITER                                             */
/*==============================================================*/
create table RECRUITER
(
   ID_INTERN            int not null,
   ID_HR                int not null,
   NOM_COMPAGNE         varchar(60),
   primary key (ID_INTERN, ID_HR)
);

/*==============================================================*/
/* Table: STORY                                                 */
/*==============================================================*/
create table STORY
(
   ID_STORY             int not null,
   ID_INTERN            int,
   NOM_ST               varchar(30),
   PRENOM_ST            varchar(30),
   NOM_COMPAGNE         varchar(60),
   CONTENU              text,
   DATE_ST              datetime,
   primary key (ID_STORY)
);

alter table HR add constraint FK_ASSOCIER foreign key (ID)
      references INTERNSHIP (ID) on delete restrict on update restrict;

alter table INTERNSHIP add constraint FK_FAIRE foreign key (ID_INTERN)
      references INTERN (ID_INTERN) on delete restrict on update restrict;

alter table RECRUITER add constraint FK_RECRUITER foreign key (ID_INTERN)
      references INTERN (ID_INTERN) on delete restrict on update restrict;

alter table RECRUITER add constraint FK_RECRUITER2 foreign key (ID_HR)
      references HR (ID_HR) on delete restrict on update restrict;

alter table STORY add constraint FK_AVOIR foreign key (ID_INTERN)
      references INTERN (ID_INTERN) on delete restrict on update restrict;

