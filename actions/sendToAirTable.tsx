"use server"

import Airtable from "airtable"

const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID!)

export async function sendToAirTable(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  try {
    const records = await base('ContactUs').create([
      {
        // @ts-ignore
        "fields": {
          "Name": name,
          "Email": email,
          "Message": message
        }
      }
    ])

    // @ts-ignore
    return { success: true, id: records[0].getId() }
  } catch (err) {
    console.error("Error creating record:", err)
    return { success: false, error: err }
  }
}