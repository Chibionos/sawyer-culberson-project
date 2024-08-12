"use server"

import Airtable from "airtable"

const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID!)

export async function getEvents() {
  try {
    const records = await base('Events').select().all()
    const events = records.map(record => ({
      id: record.id,
      name: record.get('Name'),
      date: record.get('Date'),
      location: record.get('Location'),
      description: record.get('Description')
    }))
    return { success: true, events }
  } catch (err) {
    console.error("Error fetching events:", err)
    return { success: false, error: err }
  }
}
