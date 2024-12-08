export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Add a validation for the body
  const invalid = false

  if (invalid) {
    throw createError({
      message: "Bad request",
      statusCode: 400,
      fatal: false,
    })
  }

  try {
    // Add async function to create item
    return { ...body, id: "123" }
  } catch (e) {
    throw createError({
      message: (e as Error).message,
    })
  }
})
