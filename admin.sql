-- DATABASE_NAME=blogedbase
-- ADMIN_USERNAME=pageAdmin
-- ADMIN_PASSWORD=Passord1

-- Create the 'pageAdministrator' user with password 'MyP@ssw0rd123'
CREATE USER 'pageAdministrator'@'localhost' IDENTIFIED BY 'MyP@ssw0rd123';

-- Create the 'blogedbase' database and switch to it
CREATE DATABASE blogedbase;
USE blogedbase;

-- Grant all privileges on the 'blogedbase' database to the 'pageAdministrator' user
GRANT ALL PRIVILEGES ON blogedbase.* TO 'pageAdministrator'@'localhost' IDENTIFIED BY 'Passord1$@bruker';

-- Grant all privileges on the 'blogedbase' database to the 'pageAdmin' user
GRANT ALL PRIVILEGES ON blogedbase.* TO 'pageAdmin'@'localhost' IDENTIFIED BY 'Passord1$@bruker';
