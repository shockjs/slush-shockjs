import React, { Component } from 'react';
<% if (redux) { %>import { connect } from 'react-redux';<% } %>
class <%= name %> extends Component
{
  /**
   * Render the component.
   */
  render()
  {
    return (
      <div></div>
    );
  }
}
<% if (redux) { %>
<%= name %>.componentID = '<%= name %>';
export default connect(state => state.<%= name %>)(<%= name %>);
<% } else { %>
<%= name %>.propTypes = { };
<%= name %>.defaultProps = { };
export default <%= name %>;
<% } %>