-- Supprimer le contenu des tables avant d'insérer de nouvelles données
TRUNCATE TABLE secure_facility_entity, facility_entity, apartment_type_entity, address_entity, person_entity, building_entity, owner_entity, tenent_entity, apartment_entity, apartement_option_entity;

-- Insérer 10 installations au total
INSERT INTO
    FacilityEntity (name, isSecure)
VALUES ('Swimming Pool', 0),
    ('Gym', 0),
    ('Parking Lot', 0),
    ('Playground', 0),
    ('Tennis Court', 0),
    ('Security Cameras', 1),
    ('Security Guards', 1),
    ('Access Control System', 1),
    ('Alarm System', 1),
    ('Fenced Perimeter', 1);

-- Insérer 10 types d'appartements au total
INSERT INTO
    ApartmentTypeEntity (type, maxOccupants)
VALUES ('Studio', 1),
    ('One Bedroom', 1),
    ('Two Bedrooms', 2),
    ('Three Bedrooms', 3),
    ('Four Bedrooms', 4),
    ('Penthouse', 2),
    ('Loft', 1),
    ('Duplex', 3),
    ('Townhouse', 4),
    ('Micro-Apartment', 1);

-- Insérer 10 adresses situées à Rennes
INSERT INTO
    AddressEntity (
        street, streetNumber, city, postalCode
    )
VALUES (
        'Rue de Nemours', '12', 'Rennes', '35000'
    ),
    (
        'Avenue Janvier', '25', 'Rennes', '35000'
    ),
    (
        'Boulevard de Chézy', '8', 'Rennes', '35000'
    ),
    (
        'Place des Lices', '1', 'Rennes', '35000'
    ),
    (
        'Rue Saint-Michel', '14', 'Rennes', '35000'
    ),
    (
        'Rue d\'Antrain', '6', 'Rennes', '35000'
    ),
    (
        'Avenue de la Préfecture', '31', 'Rennes', '35000'
    ),
    (
        'Rue de Vern', '42', 'Rennes', '35000'
    ),
    (
        'Boulevard de la Liberté', '55', 'Rennes', '35000'
    ),
    (
        'Rue Gambetta', '18', 'Rennes', '35000'
    );

-- Insérer 10 utilisateurs avec des mots de passe de 8 caractères
INSERT INTO
    PersonEntity (
        firstName, lastName, phoneNumber, age, password
    )
VALUES (
        'John', 'Doe', '123456789', 30, 'P@ssw0rd'
    ),
    (
        'Jane', 'Smith', '987654321', 35, 'Secret12'
    ),
    (
        'Alice', 'Johnson', '5551234567', 25, 'User1234'
    ),
    (
        'Bob', 'Williams', '3339998888', 40, 'Passw0rd'
    ),
    (
        'Emily', 'Brown', '1112223333', 28, 'Password1'
    ),
    (
        'Michael', 'Jones', '4445556666', 32, 'Secure12'
    ),
    (
        'Sarah', 'Davis', '7778889999', 37, 'Passw0rd'
    ),
    (
        'David', 'Miller', '6667778888', 45, 'Secret12'
    ),
    (
        'Laura', 'Wilson', '9998887777', 29, 'Password1'
    ),
    (
        'James', 'Taylor', '2223334444', 34, 'Secure12'
    );

-- Pour chaque bâtiment, insérer entre 1 et 3 installations sécurisées aléatoires
DO $$ DECLARE 
	building_id INTEGER;
	facility_count INTEGER;
	facility_ids INTEGER[];
	i INTEGER;
BEGIN
	  FOR building_id IN 1 . . 10 LOOP facility_count := 1 + FLOOR ( RANDOM ( ) * 3 ) ;
	-- Entre 1 et 3 installations sécurisées
	facility_ids := ARRAY (
	    SELECT id
	    FROM SecureFacilityEntity
	    ORDER BY RANDOM ()
	    LIMIT facility_count
	);
	 FOR i IN 1 . . facility_count LOOP INSERT INTO SecureFacilityEntity ( lastInspection , facilityId , buildingId ) VALUES ( CURRENT_DATE , facility_ids[i] , building_id ) ;
END
	LOOP;
END
	LOOP;
END
$$; 