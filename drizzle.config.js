/** @type {import("drizzle-kit").Config} */

export default{
    schema: "./utils/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:ihRmTVx0cD9M@ep-cold-salad-a51d77l6.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require'
    }
};
