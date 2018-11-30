# "Code In Style" examples

This repository contains all the code examples for the upcoming "Code In Style" blog post. It's divided in three folders:

- `babel-preset-custom-team-preset/`: contains the source code for our Babel preset
- `eslint-config-custom-team-rules/`: contains the source for our ESLint shared rules
- `test-project/`: contains a test project with Babel and ESLint where we can see our preset and rules in action.

## Running it
In order for the `test-project/` to actually pick up on our preset en rules, we need to [`npm link`](https://docs.npmjs.com/cli/link) the packages. This will create a symlink to these packages in your global `node_modules/` folder, which can then be "installed" into your project.

So first up, go to the `babel-preset-custom-team-preset/` folder and run `npm link`:

```bash
❯ cd babel-preset-custom-team-preset/
❯ npm link
```

This will output some installation logs, but should be finished fairly quickly. You can do the same for the `eslint-config-custom-team-config/` folder:

```bash
❯ cd cd eslint-config-custom-team-rules/
❯ npm link
```

Nothing fancy here.

Next up, go to the `test-project/` folder and run `npm link` again, this time with the package names. This will create a symbolic link from our global `node_modules/` folder into our project:

```bash
❯ cd test-project/
❯ npm link babel-preset-custom-team-preset
❯ npm link babel-config-custom-team-rules
```

And that's it! You can lint the project using `npm run lint`, and use Babel to build with `npm run build`. If you'd like to experiment with the preset and config, you can do that directly in those folders. Because they are symlinked, `test-project/` will then automatically have those changes.