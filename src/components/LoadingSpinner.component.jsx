import spinner from './assets/spinner.gif'

const LoadingSpinner = () => {
    return (
        <img style={{
            width: '100px',
            margin: 'auto',
            display: 'block'
        }} src={spinner} alt="Loading..." />
    );
}

export default LoadingSpinner;