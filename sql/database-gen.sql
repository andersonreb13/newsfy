CREATE DATABASE newsfy;

USE newsfy;

CREATE TABLE IF NOT EXISTS imports (
    id int AUTO_INCREMENT,
    importDate datetime NOT NULL,
    rawContent mediumtext NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS articles (
    id int AUTO_INCREMENT,
    externalId varchar(500) NOT NULL,
    importDate datetime NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    publicationDate DATETIME NOT NULL,
    link text NOT NULL,
    mainPicture text NOT NULL,
    PRIMARY KEY (id)
);