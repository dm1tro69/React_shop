import React, {useEffect} from 'react'

function Alert(props) {
    const {name = '', closeAlert} = props

    useEffect(() => {
        const timer = setTimeout(closeAlert, 3000)
        return () => {
            clearTimeout(timer)
        }
    }, [name])

    return (
        <div id={'toast-container'} >
            <div className="toast">
                {name} добавлен в корзину
            </div>
        </div>
    )

}
export default Alert