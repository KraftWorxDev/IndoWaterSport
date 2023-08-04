import { Accessor, Setter, createContext, useContext, createSignal} from "solid-js"

interface ContextProps {
    modalState: Accessor<boolean>,
    setModalState: Setter<boolean>,
    modalTitleState: Accessor<string>,
    setModalTitleState: Setter<string>,
    modalTextState: Accessor<string>,
    setModalTextState: Setter<string>,
}

const ProjectModalContext = createContext<ContextProps>();

export function ProjectModalContextProvider(props: any) {
    const [ modalState, setModalState ] = createSignal(false);
    const [ modalTitleState, setModalTitleState ] = createSignal('')
    const [ modalTextState, setModalTextState ] = createSignal('');

    return (
        <ProjectModalContext.Provider 
            value={{
                modalState, 
                setModalState, 
                modalTitleState, 
                setModalTitleState, 
                modalTextState, 
                setModalTextState 
            }}>
            {props.children}
        </ProjectModalContext.Provider>
    )
}

export const useProjectModalContext = () => useContext(ProjectModalContext)!;