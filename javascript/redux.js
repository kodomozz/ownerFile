//子组件
var Child = React.createClass({
    render: function(){
        return (
            <div>
                请输入邮箱：<input onChange={this.props.handleEmail}/>
            </div>
        )
    }
});
//父组件，此处通过event.target.value获取子组件的值
var Parent = React.createClass({
    getInitialState: function(){
        return {
            email: ''
        }
    },
    handleEmail: function(event){
        this.setState({email: event.target.value});
    },
    render: function(){
        return (
            <div>
                <div>用户邮箱：{this.state.email}</div>
                <Child name="email" handleEmail={this.handleEmail.bind(this)}/>
            </div>
        )
    }
});
React.render(
  <Parent />,
  document.getElementById('test')
);