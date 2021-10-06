How to run code

- Code should automatically run in the browser. To edit code, click the "Fork" button.

### Process

I used React because I am most familiar with the framework and prefer its flexibility and modularization. I choose typescript over javascript because typescript provides better support for debugging and error handling. Additionally, for CSS, I used styled-components because it makes CSS more modular and easy to read. I use the styled-react-module package to be able to easily create a module for the "Add Member" functionality.

Given the time constraints, I stuck with the basic design aesthetic of the wireframe for this version. I looked into incorporating a pre-built design system like uswds but decided to build out a basic design system instead. I structured my code into 4 folders containing 7 files.

- models - the data models that would be used in the application
- containers - the pages that will be displayed
- components - components that store their own state or logic.
- styles - design system and global styles

This seperates the data, styles, and functional components into seperate folders for easier organization.

Questions for Designer

- What fonts and font sizes do they use?
- Where does this fit within the user flow?

### Removing Household Member

On the UI, I would show a delete icon on the cards. If the user clicked the delete button, an alert box would pop up asking them to confirm the action. I'd pass in a `deleteFamilyMember` callback function from the HomePage to FamilyMemberTile and, if they confirm deleting, I'd use the react useState hook to delete that model from the familyMembers list, which would update the UI.

### Editing Household Member

On the UI, I would show an edit icon on the cards. I'd create another modal similar to the Add New Member modal and load the form with the data from that family member. When the user submits the form to update the family member, I'd pass the new family member data up to the HomePage component which will use the react useState hook to update that model in the familyMembers list.
