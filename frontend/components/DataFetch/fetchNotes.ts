"use server"
import { auth } from "@clerk/nextjs";

export interface Note {
	id?: number;
	title: string;
	body: string;
	preview?: string;
	updated_at?: string;
	created_at?: string;
	author?: string;
	tags: Array<string>;
}

export async function getUserNotes() {
	const { userId, getToken } = auth();
	const resp = await fetch(`http://localhost:8000/api/notes/`, {
		headers: { Authorization: `Bearer ${await getToken()}` },
	});
    
	const mesg = await resp.json();
	return mesg;
}

export async function createNotes(note: Note) {
	const { userId, getToken } = auth();
	const resp = await fetch(`http://localhost:8000/api/notes/`, {
		method: "POST",
		headers: { 
			Authorization: `Bearer ${await getToken()}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(note)
	});

	const mesg = await resp.json();
	return mesg;
}