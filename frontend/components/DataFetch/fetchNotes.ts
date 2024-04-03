"use server"
import { auth } from "@clerk/nextjs";

export async function getUserNotes() {
	const { userId, getToken } = auth();
	const resp = await fetch(`http://localhost:8000/api/notes/`, {
		headers: { Authorization: `Bearer ${await getToken()}` },
	});
    console.log(await getToken());
    
	const mesg = await resp.json();
	return mesg;
}

export async function createNotes() {
	const { userId, getToken } = auth();
	const resp = await fetch(`http://localhost:8000/api/notes/`, {
		headers: { 
			Authorization: `Bearer ${await getToken()}` 
		},
	});
	console.log(await getToken());

	const mesg = await resp.json();
	return mesg;
}