using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace backend.Models
{
    public partial class BDContexto : DbContext
    {
        public BDContexto()
        {
        }

        public BDContexto(DbContextOptions<BDContexto> options)
            : base(options)
        {
        }

        public virtual DbSet<Aluno> Alunos { get; set; } = null!;
        public virtual DbSet<AlunoDisciplina> AlunoDisciplinas { get; set; } = null!;
        public virtual DbSet<Aula> Aulas { get; set; } = null!;
        public virtual DbSet<Avaliacao> Avaliacaos { get; set; } = null!;
        public virtual DbSet<Colaborador> Colaboradors { get; set; } = null!;
        public virtual DbSet<Disciplina> Disciplinas { get; set; } = null!;
        public virtual DbSet<Pessoa> Pessoas { get; set; } = null!;
        public virtual DbSet<Resposta> Resposta { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=localhost;user=guest;password=123;database=letmerate", Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.6.7-mariadb"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_general_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Aluno>(entity =>
            {
                entity.HasKey(e => e.Ra)
                    .HasName("PRIMARY");

                entity.ToTable("aluno");

                entity.HasIndex(e => e.FkPessoa, "fk_pessoa");

                entity.Property(e => e.Ra)
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever()
                    .HasColumnName("ra");

                entity.Property(e => e.FkPessoa)
                    .HasColumnType("int(11)")
                    .HasColumnName("fk_pessoa");

                entity.HasOne(d => d.FkPessoaNavigation)
                    .WithMany(p => p.Alunos)
                    .HasForeignKey(d => d.FkPessoa)
                    .HasConstraintName("aluno_ibfk_1");
            });

            modelBuilder.Entity<AlunoDisciplina>(entity =>
            {
                entity.HasKey(e => e.IdAlunoDisc)
                    .HasName("PRIMARY");

                entity.ToTable("aluno_disciplina");

                entity.HasIndex(e => e.FkAluno, "fk_aluno");

                entity.HasIndex(e => e.FkDisc, "fk_disc");

                entity.Property(e => e.IdAlunoDisc)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_aluno_disc");

                entity.Property(e => e.FkAluno)
                    .HasColumnType("int(11)")
                    .HasColumnName("fk_aluno");

                entity.Property(e => e.FkDisc)
                    .HasColumnType("int(11)")
                    .HasColumnName("fk_disc");

                entity.HasOne(d => d.FkAlunoNavigation)
                    .WithMany(p => p.AlunoDisciplinas)
                    .HasForeignKey(d => d.FkAluno)
                    .HasConstraintName("aluno_disciplina_ibfk_1");

                entity.HasOne(d => d.FkDiscNavigation)
                    .WithMany(p => p.AlunoDisciplinas)
                    .HasForeignKey(d => d.FkDisc)
                    .HasConstraintName("aluno_disciplina_ibfk_2");
            });

            modelBuilder.Entity<Aula>(entity =>
            {
                entity.HasKey(e => e.IdAula)
                    .HasName("PRIMARY");

                entity.ToTable("aula");

                entity.HasIndex(e => e.FkDisc, "fk_disc");

                entity.Property(e => e.IdAula)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_aula");

                entity.Property(e => e.DataMinistrada).HasColumnName("data_ministrada");

                entity.Property(e => e.FkDisc)
                    .HasColumnType("int(11)")
                    .HasColumnName("fk_disc");

                entity.Property(e => e.Tema)
                    .HasMaxLength(50)
                    .HasColumnName("tema");

                entity.HasOne(d => d.FkDiscNavigation)
                    .WithMany(p => p.Aulas)
                    .HasForeignKey(d => d.FkDisc)
                    .HasConstraintName("aula_ibfk_1");
            });

            modelBuilder.Entity<Avaliacao>(entity =>
            {
                entity.HasKey(e => e.IdAval)
                    .HasName("PRIMARY");

                entity.ToTable("avaliacao");

                entity.HasIndex(e => e.FkAluno, "fk_aluno");

                entity.HasIndex(e => e.FkAula, "fk_aula");

                entity.Property(e => e.IdAval)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_aval");

                entity.Property(e => e.DataPostagem).HasColumnName("data_postagem");

                entity.Property(e => e.FkAluno)
                    .HasColumnType("int(11)")
                    .HasColumnName("fk_aluno");

                entity.Property(e => e.FkAula)
                    .HasColumnType("int(11)")
                    .HasColumnName("fk_aula");

                entity.Property(e => e.Mensagem)
                    .HasMaxLength(300)
                    .HasColumnName("mensagem");

                entity.Property(e => e.Qualidade)
                    .HasColumnType("tinyint(4)")
                    .HasColumnName("qualidade");

                entity.HasOne(d => d.FkAlunoNavigation)
                    .WithMany(p => p.Avaliacaos)
                    .HasForeignKey(d => d.FkAluno)
                    .HasConstraintName("avaliacao_ibfk_2");

                entity.HasOne(d => d.FkAulaNavigation)
                    .WithMany(p => p.Avaliacaos)
                    .HasForeignKey(d => d.FkAula)
                    .HasConstraintName("avaliacao_ibfk_1");
            });

            modelBuilder.Entity<Colaborador>(entity =>
            {
                entity.HasKey(e => e.IdColab)
                    .HasName("PRIMARY");

                entity.ToTable("colaborador");

                entity.HasIndex(e => e.FkDisc, "fk_disc");

                entity.HasIndex(e => e.FkPessoa, "fk_pessoa");

                entity.Property(e => e.IdColab)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_colab");

                entity.Property(e => e.FkDisc)
                    .HasColumnType("int(11)")
                    .HasColumnName("fk_disc");

                entity.Property(e => e.FkPessoa)
                    .HasColumnType("int(11)")
                    .HasColumnName("fk_pessoa");

                entity.Property(e => e.Funcao).HasColumnName("funcao");

                entity.HasOne(d => d.FkDiscNavigation)
                    .WithMany(p => p.Colaboradors)
                    .HasForeignKey(d => d.FkDisc)
                    .HasConstraintName("colaborador_ibfk_2");

                entity.HasOne(d => d.FkPessoaNavigation)
                    .WithMany(p => p.Colaboradors)
                    .HasForeignKey(d => d.FkPessoa)
                    .HasConstraintName("colaborador_ibfk_1");
            });

            modelBuilder.Entity<Disciplina>(entity =>
            {
                entity.HasKey(e => e.IdDisc)
                    .HasName("PRIMARY");

                entity.ToTable("disciplina");

                entity.Property(e => e.IdDisc)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_disc");

                entity.Property(e => e.Nome)
                    .HasMaxLength(25)
                    .HasColumnName("nome");
            });

            modelBuilder.Entity<Pessoa>(entity =>
            {
                entity.HasKey(e => e.IdPessoa)
                    .HasName("PRIMARY");

                entity.ToTable("pessoa");

                entity.Property(e => e.IdPessoa)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_pessoa");

                entity.Property(e => e.Cpf)
                    .HasMaxLength(14)
                    .HasColumnName("cpf");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .HasColumnName("email");

                entity.Property(e => e.Nome)
                    .HasMaxLength(25)
                    .HasColumnName("nome");

                entity.Property(e => e.Sobrenome)
                    .HasMaxLength(50)
                    .HasColumnName("sobrenome");
            });

            modelBuilder.Entity<Resposta>(entity =>
            {
                entity.HasKey(e => e.IdResp)
                    .HasName("PRIMARY");

                entity.ToTable("resposta");

                entity.HasIndex(e => e.FkAval, "fk_aval");

                entity.HasIndex(e => e.FkColab, "fk_colab");

                entity.Property(e => e.IdResp)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_resp");

                entity.Property(e => e.Conteudo)
                    .HasMaxLength(300)
                    .HasColumnName("conteudo");

                entity.Property(e => e.DataResp).HasColumnName("data_resp");

                entity.Property(e => e.FkAval)
                    .HasColumnType("int(11)")
                    .HasColumnName("fk_aval");

                entity.Property(e => e.FkColab)
                    .HasColumnType("int(11)")
                    .HasColumnName("fk_colab");

                entity.HasOne(d => d.FkAvalNavigation)
                    .WithMany(p => p.Resposta)
                    .HasForeignKey(d => d.FkAval)
                    .HasConstraintName("resposta_ibfk_1");

                entity.HasOne(d => d.FkColabNavigation)
                    .WithMany(p => p.Resposta)
                    .HasForeignKey(d => d.FkColab)
                    .HasConstraintName("resposta_ibfk_2");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.IdUser)
                    .HasName("PRIMARY");

                entity.ToTable("user");

                entity.HasIndex(e => e.FkPessoa, "fk_pessoa");

                entity.Property(e => e.IdUser)
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever()
                    .HasColumnName("id_user");

                entity.Property(e => e.FkPessoa)
                    .HasColumnType("int(11)")
                    .HasColumnName("fk_pessoa");

                entity.Property(e => e.Password)
                    .HasMaxLength(32)
                    .HasColumnName("password");

                entity.Property(e => e.Type).HasColumnName("type");

                entity.Property(e => e.Username)
                    .HasMaxLength(32)
                    .HasColumnName("username");

                entity.HasOne(d => d.FkPessoaNavigation)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.FkPessoa)
                    .HasConstraintName("user_ibfk_1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
