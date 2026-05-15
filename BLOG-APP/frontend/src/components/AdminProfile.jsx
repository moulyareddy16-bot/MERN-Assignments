function AdminProfile() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
      <p className="text-gray-600 text-lg">Manage users and articles across the platform.</p>
      <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
        <p className="text-amber-800">Admin features are currently under development.</p>
      </div>
    </div>
  );
}

export default AdminProfile;