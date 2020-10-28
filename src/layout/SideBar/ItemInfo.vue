<script>
export default {
  name: 'ItemInfo',
  functional: true,
  props: {
    icon: {
      type: String,
      default: 'close'
    },
    title: {
      type: String,
      default: 'null'
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []
    vnodes.push(<i class={'el-icon-' + icon} />)
    vnodes.push(<span slot='title'>{title}</span>)
    return vnodes
  }
}
</script>
