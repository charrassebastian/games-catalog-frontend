export const DeletionConfirmation = ({ onCancel, onConfirm }: { onCancel: () => void, onConfirm: () => void }) => {
    return (
            <div>
                <p className="my-3">This action can not be undone. If you want to delete, press "Ok"</p>
                <div>
                    <button className='mb-3 btn btn-secondary' onClick={onCancel}>Cancel</button>
                </div>
                <div>
                    <button className='mb-3 btn btn-danger' onClick={onConfirm}>Ok</button>
                </div>
            </div>  
    )
}
