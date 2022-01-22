import useResize from '../hooks/useResize'

export default function ResizeComponent() {
    const [target, currentSize] = useResize()
    const { width, height } = currentSize

    return (
        <div ref={ target }>
            <h3>This is resize component:</h3>
            <ul>
                <li>{ `width: ${ width }` }</li>
                <li>{ `height: ${ height }` }</li>
            </ul>
        </div>
    )
}

