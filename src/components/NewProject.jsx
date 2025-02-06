import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default (function NewProject({onAdd, onCancel}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const duedate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDuedate= duedate.current.value;

        if (
            enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDuedate.trim() === ''
        ) {
            modal.current.open();
            return;
        }
        
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            duedate: enteredDuedate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4">
                    Invalid inputs
                </h2>
                <p className="text-stone-600 mb-4">
                    You forgot to enter a value.
                </p>
                <p className="text-stone-600 mb-4">
                    Please make a valid value for every input field.
                </p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button 
                            className="text-stone-800 hover:text-stone-950"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button 
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label="Title" type="text" />
                    <Input ref={description} label="Description" textarea />
                    <Input ref={duedate} label="Due Date" type="date" />
                </div>
            </div>
        </>
    );
});