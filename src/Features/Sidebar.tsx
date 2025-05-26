import { Title } from '../Components/Title'
import { isAdmin } from '../utils/auth'
import { SectionsSidebar } from '../Components/SectionsSidebar'
import { AdminBoard } from '../Components/AdminBoard'

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-primary text-white-100 p-4 space-y-4">
                <Title text={isAdmin() ? 'Administración' : 'Eco app'} />
                {isAdmin() ? <AdminBoard /> : <SectionsSidebar />}
            </aside>
            <main className="flex-1">{children}</main>
        </div>
    )
}
