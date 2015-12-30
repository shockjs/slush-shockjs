import React, { Component } from 'react';
<% if (redux) { %>import { connect } from 'react-redux';<% } %>
class <%= name %> extends Component
{

  static componentID = '<%= name %>';

  /**
   * Render the component.
   */
  render()
  {
    return <div></div>
  }
}
<% if (redux) { %>
export default connect(state => state.<%= name %>)(<%= name %>);
<% } else { %>
export default <%= name %>;
<% } %>