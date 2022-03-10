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
    lastName varchar(255) NOT NULL,
    firstName varchar(255) NOT NULL,
    login varchar(255) UNIQUE,
    password varchar(255),
    rol uuid,
    email varchar(255) UNIQUE,
    PRIMARY KEY (id),
    CONSTRAINT FK_Rols FOREIGN KEY (rol)
    REFERENCES roles(id)
);

CREATE TABLE participants (
    id   uuid DEFAULT uuid_generate_v4 (),
    lastName varchar(255) NOT NULL,
    firstName varchar(255),
     courseId uuid NOT NULL,
    createdAt DATE ,
    PRIMARY KEY (id),
    CONSTRAINT FK_Courses FOREIGN KEY (courseId)
    REFERENCES courses(id)
);

CREATE TABLE classes (
    id   uuid DEFAULT uuid_generate_v4 (),
 userId uuid NOT NULL,
    courseId uuid NOT NULL,
    createdAt DATE NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_Cousers FOREIGN KEY (courseId)
    REFERENCES courses(id),
  CONSTRAINT FK_Users FOREIGN KEY (userId)
 REFERENCES users(id)
);

CREATE TABLE userCourses(
 id   uuid DEFAULT uuid_generate_v4 (),
  userId uuid NOT NULL,
    courseId uuid NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_Courses FOREIGN KEY (courseId)
    REFERENCES courses(id),
  CONSTRAINT FK_Users FOREIGN KEY (userId)
 REFERENCES users(id)
);

CREATE TABLE assistance(
    id  uuid DEFAULT uuid_generate_v4 (),
    participantId uuid NOT NULL,
    classId uuid NOT NULL,
    isPartial boolean NOT NULL,
    coments VARCHAR(255),
    assistance smallInt NOT NULL, 
    PRIMARY KEY (id),
    CONSTRAINT FK_Classes FOREIGN KEY (classId)
    REFERENCES classes(id),
    CONSTRAINT FK_Participant FOREIGN KEY (participantId)
    REFERENCES participants(id)
);

