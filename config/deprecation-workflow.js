window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchId: "ember-metal.ember-k" },
    { handler: "silence", matchId: "container-lookupFactory" },
    { handler: "silence", matchId: "ember-application.validate-type" }
  ]
};