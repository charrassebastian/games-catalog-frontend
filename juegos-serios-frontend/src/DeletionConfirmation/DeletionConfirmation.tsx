export const DeletionConfirmation = ({ onCancel, onConfirm }: { onCancel: () => void, onConfirm: () => void }) => {
    return (
            <div>
                <p className="my-3">Esta acción no se puede deshacer. Si deseas borrar, presiona "Aceptar".</p>
                <div>
                    <button className='mb-3 btn btn-secondary' onClick={onCancel}>Cancelar</button>
                </div>
                <div>
                    <button className='mb-3 btn btn-danger' onClick={onConfirm}>Aceptar</button>
                </div>
            </div>  
    )
}
