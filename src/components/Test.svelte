<script>
    let count = $state(0); // Reactive variable in Svelte

    function onclick() {
        count++;
    }
</script>

<button {onclick}>Count: {count}</button>
