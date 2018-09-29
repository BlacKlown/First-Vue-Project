let localCity = '北京'
try {
  localCity = localStorage.city
} catch (e) {}

export default {
  city: localCity
}
