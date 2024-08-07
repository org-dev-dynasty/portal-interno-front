export default function Error404() {
    return (
        <div className={"container w-full h-full"}>
            <h1>404 Error</h1>
            <p>Sorry, we couldn’t find the page you re looking for</p>
            <button className={"from-[#673366]"}>Return Home</button>
            <img
                src={''}
                className={"-rotate-45 w-full h-full"}
                alt={''}
            ></img>
        </div>
    );
}