

export default function NavBar() {

    return (
        <div className="w-9/10 lg:w-9/10 flex flex-row items-center justify-between mt-4 mb-5 text-black dark:text-white">
            <p className="text-[var(--steel-Blue)]">{`<IH/>`}</p>
            <div>
                <a href="/habeeb Resume 2.0.pdf" download={true} className="px-4 py-2 bg-[var(--steel-Blue)] hover:text-white dark:hover:bg-gray-700 rounded">DOWNLOAD RESUME</a>
            </div>

        </div>
    )
}