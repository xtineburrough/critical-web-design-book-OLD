<!-- 
Title: String Art Generator
Author(s): Owen Mundy (2023), Alexander H. (2009)
Date: 2023
License: MIT
-->

<script>
	let title = "String Art Generator",
		str = "",
		arr;

	let w = 70,
		h = 50;

	function shuffleArray(_arr) {
		for (let i = _arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[_arr[i], _arr[j]] = [_arr[j], _arr[i]];
		}
		return _arr;
	}
	const randomHex = () =>
		"#" + Math.floor(Math.random() * 16777215).toString(16);

	const randomInt = (min = 0, max = 1) =>
		Math.floor(Math.random() * (max - min + 1)) + min;

	function generate() {
		arr = shuffleArray(str.split(""));
		if (arr.length > 0) title = "";
		// console.log("generate()", arr);
	}
	const samples = [
		"The quick brown fox jumps over the lazy dog",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
	];
	const addSample = () => {
		str = samples[Math.floor(Math.random() * samples.length)];
	};
	// Svelte reactive statements
	// https://svelte.dev/docs/svelte-components#script-3-$-marks-a-statement-as-reactive
	$: str, generate();
</script>

<main>
	<div>
		<a href="./">
			<!-- Svelte @html expression to inject HTML
            https://svelte.dev/docs/special-tags#html -->
			<h1 class="logo">{@html title}</h1>
		</a>
	</div>

	<div>
		<!-- Svelte #key causes the element (or component) to completely update when the prop changes 
        https://svelte.dev/docs/logic-blocks#key -->
		{#key arr}
			<!-- Svelte #each block
        https://svelte.dev/docs/logic-blocks#each -->
			{#each arr as letter}
				<!-- Svelte style directive
                https://svelte.dev/docs/element-directives#style-property -->
				<div
					class="char"
					style:color={randomHex()}
					style:left="{randomInt(45 - w / 2, 40 + w / 2)}%"
					style:top="{randomInt(50 - h / 2, 40 + h / 2)}%"
					style:transform="rotate({randomInt(0, 360)}deg)"
					style:font-size="{randomInt(1, 25)}rem"
				>
					{letter}
				</div>
			{/each}
		{/key}
	</div>

	<div class="grid-container sticky-footer">
		<div class="note">
			Type or <button class="sm" on:click={addSample}>add</button>
			sample text. Tweak parameters and
			<button class="sm" on:click={generate}>regenerate</button>
			 the visualization.
		</div>

		<div>
			<textarea id="str" bind:value={str}></textarea>
			<label class="note" for="str" style="visibility: hidden;">
				Enter text for transformation
			</label>
		</div>

		<div>
			<label class="note" for="w">width</label>
			<input id="w" type="range" min="0" max="100" bind:value={w} />
			<span class="digit">{w}</span>
			<br />

			<label class="note" for="w">height</label>
			<input id="h" type="range" min="0" max="100" bind:value={h} />
			<span class="digit">{h}</span>
		</div>
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.grid-container {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: 2fr 3fr 2fr;
		grid-auto-flow: column;
		align-items: center;
	}
	.grid-container > div {
		height: 100px;
		/* border: 1px solid red; */
	}
	.sticky-footer {
		box-sizing: border-box;
		width: 100%;
		height: 100px;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 0 1rem;
		/* background-color: #303030; */
	}
	textarea {
		width: 100%;
		height: 70px;
	}
	.digit {
		display: inline-block;
		width: 3rem;
		margin: 3px 3px;

		background-color: var(--button-bg);
		border-radius: 20%;
	}
	.note {
		text-align: left !important;
		color: #888;
	}

	.char {
		position: absolute;
		line-height: 0%;
	}
</style>
