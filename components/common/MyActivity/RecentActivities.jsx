
export default function RecentActivities() {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">Edureka Guest's Recent Activities</h3>
        <select className="border px-2 py-1 rounded">
          <option>All Courses</option>
        </select>
      </div>
      <p className="text-gray-600">No activities!</p>
    </div>
  )
}
