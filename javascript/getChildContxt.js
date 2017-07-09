// This code *does NOT work* becasue of a missing property from childContextTypes
var A = React.createClass({

    childContextTypes: {
         // fruit is not specified, and so it will not be sent to the children of A
         name: React.PropTypes.string.isRequired
    },

    getChildContext: function() {
         return {
             name: "Jonas",
             fruit: "Banana"
         };
    },

    render: function() {
         return <B />;
    }
});

var B = React.createClass({

    contextTypes: {
        fruit: React.PropTypes.string.isRequired
    },

    render: function() {
        return <div>My favorite fruit is: {this.context.fruit}</div>;
    }
});


// Errors: Invariant Violation: A.getChildContext(): key "fruit" is not defined in childContextTypes.
React.render(<A />, document.body);

let AA = React.createClass({
    childContextTypes: {
        name: React.PropTypes.string.isRequired,
    },

    getChildContext: {
        return {
            name: 'Jsonas',
            fruit: 'banana'
        }
    },

    render: function () {
        return <B />
    }
})

let BB = React.createClass({
    contextTypes: {
        fruit: React.PropTypes.string.isRequired,
    },

    render: function () {
        
    }
})