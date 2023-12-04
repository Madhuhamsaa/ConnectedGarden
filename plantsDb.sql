CREATE DATABASE IF NOT EXISTS PlantDatabase;
USE PlantDatabase;
CREATE TABLE IF NOT EXISTS PlantCategories (
category_id INT auto_increment primary Key,
category_name varchar(50) not null
);
 create table if not exists Plants(
 plant_id int auto_increment primary key,
 plant_name varchar(100) not null,
 scientific_name varchar(150),
 description text,
 category_id int,
 foreign key (category_id) references  PlantCategories (category_id)
 );

 insert into PlantCategories (category_name) values
 ('Flowering Plants'),
 ('Ferns'),
 ('Succulents'),
 ('Trees'),
 ('Shrubs');
 insert into Plants (plant_name, Scientific_name, description, category_id) values
 ('Rose', 'Rosa', 'A beautiful flowering plant with thorny stems.', 1),
 ('Fern', 'Polypodiopsida', 'A non-flowering vascular plant with feathery leaves.', 2),
 ('Aloe Vera', 'Aloe barbadensis miller', 'A succulent known for its medicinal properties.', 3),
 ('Oak Tree', 'Quercus', 'A large deciduous tree with acorns.', 4),
 ('Azalea', 'Rhododendron', 'A flowering shrub with vibrant blooms.', 5);
 
 CREATE TABLE IF NOT EXISTS CareInstructions (
 instruction_id INT AUTO_INCREMENT PRIMARY KEY,
 plant_id INT,
 care_instruction TEXT,
 FOREIGN KEY (plant_id) REFERENCES Plants(plant_id) );
 
 CREATE TABLE IF NOT EXISTS PlantImages (   
 image_id INT AUTO_INCREMENT PRIMARY KEY,
 plant_id INT,
  image_url VARCHAR(255),
  caption TEXT,
  FOREIGN KEY (plant_id) REFERENCES Plants(plant_id) );
  
  CREATE TABLE IF NOT EXISTS PlantVarieties (
  variety_id INT AUTO_INCREMENT PRIMARY KEY,
  plant_id INT,
  variety_name VARCHAR(100),
  description TEXT,    
  FOREIGN KEY (plant_id) REFERENCES Plants(plant_id) );
 
CREATE TABLE IF NOT EXISTS PlantReviews (  
review_id INT AUTO_INCREMENT PRIMARY KEY,
 plant_id INT,
 user_name VARCHAR(100),
 review_text TEXT,
 rating INT,     
 FOREIGN KEY (plant_id) REFERENCES Plants(plant_id) );
 
 CREATE TABLE IF NOT EXISTS PlantLocations (  
 location_id INT AUTO_INCREMENT PRIMARY KEY,
 plant_id INT,  
 location_name VARCHAR(100),
 atitude DECIMAL(10, 6),
 longitude DECIMAL(10, 6),  
 FOREIGN KEY (plant_id) REFERENCES Plants(plant_id) );
 
 
 



