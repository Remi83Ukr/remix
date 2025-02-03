import NewNote, { links as newNotesLinks } from "~/components/NewNote";
export default function Notes() {
    return (
        <main id="content">
            <NewNote />
        </main>
    );
}

export function links() {
    return [...newNotesLinks()];
}