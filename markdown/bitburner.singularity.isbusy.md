<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [bitburner](./bitburner.md) &gt; [Singularity](./bitburner.singularity.md) &gt; [isBusy](./bitburner.singularity.isbusy.md)

## Singularity.isBusy() method

Check if the player is busy.

**Signature:**

```typescript
isBusy(): boolean;
```
**Returns:**

boolean

True if the player is currently performing an action, false otherwise.

## Remarks

RAM cost: 0.5 GB \* 16/4/1

Returns a boolean indicating if the player is currently performing an action. These actions include:

- Studying at a university

- Working out at a gym

- Working for a company/faction

- Creating a program

- Committing a crime

- Grafting an augmentation

Note:

- This function returns true when the UI is showing the infiltration UI or the BitVerse.

- This function does not take Bladeburner actions into account. You can use [getCurrentAction](./bitburner.bladeburner.getcurrentaction.md) to check if you are performing a Bladeburner action.

