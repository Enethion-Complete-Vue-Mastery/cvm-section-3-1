const vm = Vue.createApp({
    data() {
        return {
            properties: [
                {
                    name: 'perspective',
                    value: 0,
                    unit: 'px',
                    min: 0,
                    max: 999,
                    isTransform: false
                },
                {
                    name: 'rotateX',
                    value: 0,
                    unit: 'deg',
                    min: -180,
                    max: 180,
                    isTransform: true
                },
                {
                    name: 'rotateY',
                    value: 0,
                    unit: 'deg',
                    min: -180,
                    max: 180,
                    isTransform: true
                },
                {
                    name: 'rotateZ',
                    value: 0 ,
                    unit: 'deg',
                    min: -180,
                    max: 180,
                    isTransform: true 
                }
            ]
        }
    },
    methods: {
        reset() {
            this.properties.map((property) => property.value = 0)
        },
        copy() {
            const element = document.createElement('textarea')
            element.value = `transform: ${this.outputProps}`
            element.setAttribute('readonly', '')
            element.style.opacity = 0
            document.body.append(element)
            element.select()
            document.execCommand('copy')
            document.body.removeChild(element)
        }
    },
    computed: {
        outputProps() {
            const props = this.properties.map((p, i) => {
                return `${p.name}(${p.value}${p.unit})`
            })

            return props.join(' ')
        }
    }
}).mount('#app')