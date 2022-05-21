const request = require("supertest")
const app = require("../src/app.js")

describe("GET /findUsers", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/findUsers").send();
      expect(response.statusCode).toBe(200);
    });
});

/*describe("GET /findUsers", () => {
    test("respond with json containing a list of all users", async (done) => {
      request(app)
        .get("/findUsers")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
});*/