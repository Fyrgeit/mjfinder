<script></script>

<main>
    <aside>
        <ul>
            <li>Chatt 1</li>
            <li>Chatt 2</li>
            <li>Chatt 3</li>
        </ul>
    </aside>
    <div>
        <p>Current chat</p>
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.8rem;
        padding: 0;
        height: 90%;
    }

    aside {
        padding: 0.8rem;
        position: relative;
    }
    
    aside::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -2;
        box-shadow: var(--color-shadow) 0 0 0.8rem;
    }
</style>
