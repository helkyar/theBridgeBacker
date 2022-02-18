CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE courses(
    id  uuid DEFAULT uuid_generate_v4 (),
    title varchar(255) NOT NULL,
    startDate date NOT NULL,
    endDate date NOT NULL,
    type boolean NOT NULL,
    PRIMARY KEY (id));

CREATE TABLE roles(
    id  uuid DEFAULT uuid_generate_v4 (),
    name varchar(255) NOT NULL,
    PRIMARY KEY (id));

CREATE TABLE users (
    id  uuid DEFAULT uuid_generate_v4 (),
    courseId  uuid NOT NULL,
    lastName varchar(255) NOT NULL,
    firstName varchar(255),
    login varchar(255),
    password varchar(255),
    rol uuid,
    email varchar(255),
    PRIMARY KEY (id),
    CONSTRAINT FK_Cousers FOREIGN KEY (courseId)
    REFERENCES courses(id),
    CONSTRAINT FK_Rols FOREIGN KEY (rol)
    REFERENCES roles(id)
);

CREATE TABLE participants (
    id   uuid DEFAULT uuid_generate_v4 (),
    userId uuid NOT NULL,
    courseId uuid NOT NULL,
    createdAt DATE NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_Cousers FOREIGN KEY (courseId)
    REFERENCES courses(id)
);

CREATE TABLE classes (
    id   uuid DEFAULT uuid_generate_v4 (),
    absentId uuid NOT NULL,
    courseId uuid NOT NULL,
    date DATE NOT NULL,
    isPartial boolean NOT NULL,
    coments VARCHAR(255),
    PRIMARY KEY (id),
    CONSTRAINT FK_Cousers FOREIGN KEY (courseId)
    REFERENCES courses(id)
);

CREATE TABLE absents (
    id  uuid DEFAULT uuid_generate_v4 (),
    participantId uuid NOT NULL,
    classId uuid NOT NULL,
    date DATE NOT NULL,
    isPartial boolean NOT NULL,
    coments VARCHAR(255),
    PRIMARY KEY (id),
    CONSTRAINT FK_Cousers FOREIGN KEY (classId)
    REFERENCES classes(id),
    CONSTRAINT FK_Users FOREIGN KEY (participantId)
    REFERENCES participants(id)
);

