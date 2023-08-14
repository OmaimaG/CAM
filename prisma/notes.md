# Prisma Schema Explanation

The Prisma schema is a declarative definition of your data model. It allows you to describe your database schema, including models, fields, relationships, and other properties. The schema is used to generate the Prisma client, which provides a set of powerful APIs to interact with the database.

المخطط الخاص بـ Prisma هو تعريف لنموذج البيانات الخاص بك. يتيح لك وصف مخطط قاعدة البيانات الخاص بك، بما في ذلك النماذج والحقول والعلاقات وخصائص. يتم استخدام المخطط لتوليد Prisma client الذي يوفر مجموعة من و APIS القوية للتفاعل مع قاعدة البيانات.

**NOTE** `Document hedhy mahiyesh kemla. It is a simplified explanation of the Prisma schema tjm te5dh'ha ka reference. W full schema tajm tal9aha f file esmo` **schema.prisma**

## Datasource Configuration

```ts
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

- The datasource block defines the data source configuration for the Prisma client.
- The provider property specifies the database provider, which is set to "mongodb" in this case.
- The url property contains the connection string to the MongoDB database, including authentication details and the database name.

## Model Definitions example

```ts
model User {
  // Fields and properties...
  id          Int      @id @default(auto()) @map("_id") @db.ObjectId
  email       String   @unique
  password    String?
  role        Role     @default(USER)
  created_at  DateTime @default(now())

  // Relations
  Address      Address?
  AuthOptions AuthOption[]

  // ... Other model relations properties ...
}

// Other models...

enum Role {
  USER
  ADMIN
  MODERATOR
}

// Other enums...
```

- Each model block defines a data model for a specific entity in your application (e.g., User, AuthOption, etc.).
- Inside each model block, you define fields and properties that represent the attributes of the corresponding entity (e.g., email, username, type, etc.).
- Relationships between models are defined using relation directives (e.g., Address?, Account[], etc.).

### Model Fields and Properties

The models have various fields that represent different attributes of the entities. For example, the User model has fields like email, username, phone, etc.

- The **@id** attribute specifies that the corresponding field is the primary identifier for the entity.
- The **@default(auto())** attribute sets a default value for the field, usually an auto-generated value (e.g., @default(auto()) for id).
- The **@unique** attribute ensures that the field's value is unique across all records in the model (e.g., email).
- The **@db.ObjectId** attribute maps the field to MongoDB's ObjectId type.

### Relations between Models

The models have different types of relationships defined using relation directives. Here are some examples:

- **Address** is related to User in a one-to-one relationship, meaning each user can have at most one address, and each address is associated with a single user (using the Address? field in the User model).
- **Accounts** is related to User in a one-to-many relationship, meaning each user can have multiple accounts, but each account is associated with a single user (using the Account[] field in the User model).
- **Sessions** is related to User in a one-to-many relationship, meaning each user can have multiple sessions, but each session is associated with a single user (using the Session[] field in the User model).
- **AuthOptions** is related to User in a one-to-many relationship, meaning each user can have multiple authentication options, but each authentication option is associated with a single user (using the AuthOption[] field in the User model).
- **Verifications** is related to User in a one-to-many relationship, meaning each user can have multiple verifications, but each verification is associated with a single user (using the Verification[] field in the User model).

## Enumerations

Enumerations define a set of possible values for specific fields. - - For example, the Role enum specifies possible roles for a user, such as **USER**, **ADMIN**, and **MODERATOR**.

- Enumerations are helpful for ensuring data consistency and providing a limited set of valid options for certain attributes.
