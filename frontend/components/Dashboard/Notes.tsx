"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getUserNotes } from "../DataFetch/fetchNotes";

/**
 * Note interface
 */

interface NotePreview {
	id: number;
	title: string;
	body?: string;
	preview?: string;
	updated_at?: string;
	created_at: string;
	author: string;
	tags: Array<string>;
}

const addNoteModal = () => {
	return (
		<>
			<button className="btn">open modal</button>
			<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Hello!</h3>
					<p className="py-4">Press ESC key or click the button below to close</p>
					<div className="modal-action">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn">Close</button>
					</form>
					</div>
				</div>
			</dialog>
		</>
	)
}


/**
 * Notes component
 */

const Notes = () => {
	const [notes, setNotes] = useState<Array<NotePreview>>([]);
	async function getNotes() {
		setNotes(await getUserNotes());
	}
	useEffect(() => {
		getNotes();
	}, []);
	const addNote = (note: NotePreview) => {
		setNotes([...notes, note]);
	};

	const deleteNote = (id: number) => {
		setNotes(notes.filter((note) => note.id !== id));
	};
	console.log(notes);
	return (
		<div className="border-2 border-gray-500 rounded-lg w-full h-96 shadow-sm px-4 py-2 bg-base-200">
			<div className="flex flex-row justify-between items-center">
				<h3 className="text-4xl font-bold text-start h-9">
					Notes
				</h3>
				<Link
					href="/dashboard/notes/new"
					className="btn btn-accent h-8 mb-2">
					<FontAwesomeIcon icon={faPlus} />
				</Link>
			</div>

			<ul className="list-none overflow-y-auto h-80">
				{notes.map((note) => (
					<li
						key={note.id}
						className="hover:bg-base-300 rounded-lg hover:text-primary px-2">
						<Link
							href={`/dashboard/notes/${note.id}`}
							className="p-2">
							<div className="flex flex-row justify-between items-center">
								<p className="text-2xl font-semibold">
									{note.title}{" "}
								</p>
								<p className="text-sm text-neutral-500">
									{note.author}
								</p>
							</div>
							<p>{note.preview}</p>
							<div className="flex flex-row gap-2 my-1">
								{note.tags.map((tag) => (
									<span
										className="badge badge-secondary text-base-100"
										key={tag}>
										{tag}
									</span>
								))}
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Notes;
