import { Icons } from './Icons'

const ReviewStats = ({ reviews }) => {
  const calculateStats = () => {
    if (!reviews || reviews.length === 0) {
      return {
        total: 0,
        averageRating: 0,
        pending: 0,
        approved: 0,
        rejected: 0,
        fiveStar: 0
      }
    }

    const total = reviews.length
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / total
    const pending = reviews.filter(review => review.status === 'pending').length
    const approved = reviews.filter(review => review.status === 'approved').length
    const rejected = reviews.filter(review => review.status === 'rejected').length
    const fiveStar = reviews.filter(review => review.rating === 5).length

    return {
      total,
      averageRating: Math.round(averageRating * 10) / 10,
      pending,
      approved,
      rejected,
      fiveStar
    }
  }

  const stats = calculateStats()

  const statCards = [
    {
      title: 'Total Reviews',
      value: stats.total,
      icon: Icons.chart,
      color: 'stat-gray'
    },
    {
      title: 'Average Rating',
      value: `${stats.averageRating}/5`,
      icon: Icons.trending,
      color: 'stat-green'
    },
    {
      title: 'Pending Review',
      value: stats.pending,
      icon: Icons.clock,
      color: 'stat-gray'
    },
    {
      title: 'Approved',
      value: stats.approved,
      icon: Icons.check,
      color: 'stat-light-green'
    },
    {
      title: 'Rejected',
      value: stats.rejected,
      icon: Icons.x,
      color: 'stat-red'
    },
    {
      title: '5-Star Reviews',
      value: stats.fiveStar,
      icon: Icons.star,
      color: 'stat-yellow'
    }
  ]

  return (
    <div className="grid stats-grid gap-4">
      {statCards.map((stat, index) => (
        <div key={index} className={`card p-6 ${stat.color} stat-card`}>
          <div className="flex items-center">
            <div className="text-4xl mr-4">
              {stat.icon()}
            </div>
            <div>
              <p className="text-base font-semibold opacity-90">{stat.title}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReviewStats 