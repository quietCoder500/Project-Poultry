"use client"
import { useState } from "react";
import { Note, createNotes } from "@/components/DataFetch/fetchNotes";

const NewNotePage = () => {
	const [note, setNote] = useState<Note>({ title: "", body: "", tags: [] });

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		if (name in note) {
			setNote((prevNote) => ({
				...prevNote,
				[name]: value,
			}));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (note.title !== "" || note.body !== "") {
			try {
				await createNotes(note);
				setNote({ title: "", body: "", tags: [] }); // Reset note state
			} catch (error) {
				console.error(error);
				// Handle the error here (e.g. show an error message to the user)
			}
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type="text"
						name="title"
						value={note.title}
						onChange={handleChange}
					/>
				</label>
				<label>
					Content:
					<textarea
						name="body"
						value={note.body}
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Create Note</button>
			</form>
		</div>
	);
};

export default NewNotePage;
