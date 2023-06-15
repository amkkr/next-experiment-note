import z from "zod";

describe("test", () => {
  test("zod", () => {
    const testSchema = z.object({
      id: z.number(),
      name: z.string(),
      descriptions: z
        .object({
          uuid: z.string(),
          keshitai: z.string().optional(),
        })
        .omit({ keshitai: true }), // omitのためpassthroughを使えない
    });

    const result = testSchema.parse({
      id: 1,
      name: "namae",
      descriptions: {
        uuid: "uuid",
        hoge: "hogehoge",
      },
    });

    console.log({ result: result.descriptions });
  });
});
