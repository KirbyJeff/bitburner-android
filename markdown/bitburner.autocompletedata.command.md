<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [bitburner](./bitburner.md) &gt; [AutocompleteData](./bitburner.autocompletedata.md) &gt; [command](./bitburner.autocompletedata.command.md)

## AutocompleteData.command property

The raw command string that you have typed until you press \[Tab\] to use the autocomplete feature.

For example, if you type `[Space]run test.js[Space][Space][Space][Press tab to use autocomplete]`<!-- -->, "command" will contain all space characters (1 space character before "run" and 3 space characters after ".js").

**Signature:**

```typescript
command: string;
```